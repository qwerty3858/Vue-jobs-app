# Readme

- Vue 3, Vuex, Sass/Scss ve Bootstrap kullanıldı.
- Mock api/data için json-server paketinden faydalanıldı.
  - db.json içerisinde veriler sağlandı.
  - db.json, json-server ile çalıştırıldığında 2 adet endpoint üretmektedir.
    - http://localhost:3000/job-list
    - http://localhost:3000/job-details
- Tüm ilanlar sayfasında -normal şartlarda backend entegrasyonu ile gerçekleşecek olan- limit ve page parametreleriyle pagination uyumu sağlandı.
- Axios kullanıldı ve instance oluşturularak baseURL (API URL) environment variable olarak çekildi.
- Genel olarak responsive sağlandı.
- src/components altında componentlerin render için unit testleri eklendi.
- src/service altında yazılan custom parser fonksiyonunun iki durumlu unit testi eklendi.

# Installation

- `npm install` ya da `yarn` ile bağımlıkları ekleyelim.
- dev ortamında çalışacaksak:
  - mock api için `npm run server` ve vue uygulaması için `npm run dev` komutlarını çalıştıralım.
- build alarak çalışacaksak:
  - `yarn build` komutunu çalıştırarak build alıp daha sonrasında `yarn preview` komutu ile build alınan kısmı çalıştırabiliriz. (Öncesinde yine mock api komutu ayağa kaldırılması gerekiyor.)
- dev ortamında çalışmayı kolaylaştırmak için concurrently paketi eklendi ve `npm run start` komutuyla aynı anda json-server'i ve vue uygulamasını ayağa kaldırabiliriz.
- test için `npm run test:unit` komutu çalıştırılmalı.
