// 缓存名称和要缓存的文件列表
const CACHE_NAME = 'gaokao-countdown-v1';
const CACHE_FILES = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json'
];

// Service Worker 安装事件 - 缓存必要的文件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('缓存文件中...');
        return cache.addAll(CACHE_FILES);
      })
      .then(() => self.skipWaiting())
  );
});

// Service Worker 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('删除旧缓存: ' + cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 拦截请求事件 - 优先使用缓存，网络请求失败时返回缓存内容
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 返回缓存的响应，如果没有则继续网络请求
        if (response) {
          return response;
        }
        
        return fetch(event.request).then(
          response => {
            // 不缓存非 GET 请求或错误响应
            if (!response || response.status !== 200 || response.type !== 'basic' || event.request.method !== 'GET') {
              return response;
            }

            // 克隆响应以便同时返回和缓存
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
      .catch(() => {
        // 如果是对主页的请求，返回缓存的主页
        if (event.request.url.includes('index.html') || event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      })
  );
}); 