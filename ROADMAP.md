# Windows Helper - Development Roadmap

## 🎯 Proje Hedefi
Windows için automation dashboard - sık kullanılan işlemleri tek tıkla yapma.

---

## 📊 Genel İlerleme
- [ ] Faz 1: Temel Altyapı (React + Electron)
- [ ] Faz 2: Basit İşlemlerle Başla
- [ ] Faz 3: Gelişmiş Sistem İşlemleri
- [ ] Faz 4: Dinamik Action Sistemi
- [ ] Faz 5: UI/UX İyileştirmeleri
- [ ] Faz 6: Production Ready

---

## Faz 1: Temel Altyapı (React + Electron)

**Hedef:** Modern bir geliştirme ortamı kurmak

### Alt Görevler
- [ ] Vite + React + Electron entegrasyonu
- [ ] Hot reload çalışır hale getirmek
- [ ] TypeScript konfigürasyonu (opsiyonel)
- [ ] Temel klasör yapısı oluşturmak
  ```
  /src
    /main       (Electron main process)
    /preload    (Preload scripts)
    /renderer   (React app)
  ```
- [ ] Mevcut ping örneğini React'a migrate etmek

### Öğrenilecekler
- Electron'da modern tooling nasıl çalışır
- Main/Renderer/Preload process'leri arası farklar
- Vite'ın Electron ile entegrasyonu
- Hot Module Replacement (HMR) mantığı

### Başarı Kriterleri
- ✅ `npm run dev` ile hot reload çalışıyor
- ✅ React DevTools açılabiliyor
- ✅ Ping butonu çalışıyor
- ✅ Console'da hata yok

### Commit Stratejisi
```
feat: setup vite + react + electron development environment
```

---

## Faz 2: Basit İşlemlerle Başla

**Hedef:** İlk çalışan özellikleri yapmak

### Alt Görevler
- [ ] Card-based UI komponenti tasarımı
  - Card container
  - Icon area
  - Title & description
  - Action button
- [ ] Uygulama açma fonksiyonu (Discord, Steam, Cursor gibi)
  - Windows'ta `.exe` çalıştırma
  - Uygulama yolu kontrolü
  - Hata durumu yönetimi
- [ ] IPC handler'ları main process'e eklemek
- [ ] Action listesi state management (useState ile başla)
- [ ] Grid layout oluşturma

### Öğrenilecekler
- `child_process.spawn()` / `child_process.exec()`
- Windows'ta uygulama yolları (Program Files, Registry)
- IPC `invoke/handle` pattern'i
- React component composition
- Props drilling

### Başarı Kriterleri
- ✅ En az 3 uygulama açılabiliyor
- ✅ Her action bir kartta gösteriliyor
- ✅ Hata durumlarında kullanıcıya feedback var
- ✅ UI responsive çalışıyor

### Commit Stratejisi
```
feat: add card-based ui layout
feat: implement application launcher functionality
feat: add initial action cards (Discord, Steam, Cursor)
```

---

## Faz 3: Gelişmiş Sistem İşlemleri

**Hedef:** Windows'a özel işlemler

### Alt Görevler
- [ ] Çözünürlük değiştirme
  - Mevcut çözünürlükleri listele
  - PowerShell ile çözünürlük değiştir
  - Dropdown component
- [ ] Zamanlı kapatma/yeniden başlatma
  - Timer input component
  - `shutdown` komutu entegrasyonu
  - Countdown gösterimi
- [ ] Sistem bildirimleri
  - Electron Notification API
  - Success/Error feedback
- [ ] Global hata yönetimi
  - Error boundary (React)
  - Try-catch wrapper'lar
  - User-friendly error messages

### Öğrenilecekler
- PowerShell komutlarını Node.js'ten çalıştırma
- Windows `shutdown`, `nircmd` gibi araçlar
- Electron Notification API
- Error handling best practices
- React Error Boundaries

### Başarı Kriterleri
- ✅ Çözünürlük değiştirilebiliyor ve geri alınabiliyor
- ✅ Zamanlı kapatma iptal edilebiliyor
- ✅ Her işlem sonrası bildirim gösteriliyor
- ✅ Hatalar konsola değil kullanıcıya gösteriliyor

### Commit Stratejisi
```
feat: add display resolution changer
feat: implement scheduled shutdown/restart
feat: add system notifications
refactor: implement global error handling
```

---

## Faz 4: Dinamik Action Sistemi

**Hedef:** Kullanıcı yeni action ekleyebilsin

### Alt Görevler
- [ ] JSON-based action storage
  - `actions.json` dosya yapısı
  - CRUD operations (Create, Read, Update, Delete)
  - File system API kullanımı
- [ ] "Add New Action" modal/dialog
  - Form validasyonu
  - Action type seçimi (app, command, script)
  - Icon picker (emoji veya dosya)
  - Path validator
- [ ] Action editor
  - Mevcut action'ları düzenleme
  - Silme confirmation dialog
- [ ] Action types
  - Application launcher
  - Shell command
  - PowerShell script
  - URL opener

### Öğrenilecekler
- File system API (`fs.promises`)
- JSON schema validation
- Form handling in React (controlled components)
- Modal/Dialog patterns
- Data persistence

### Başarı Kriterleri
- ✅ Kullanıcı yeni action ekleyebiliyor
- ✅ Action'lar app restart'tan sonra kalıyor
- ✅ Action'lar düzenlenebiliyor ve silinebiliyor
- ✅ Geçersiz veri girilemiyor (validation)

### Commit Stratejisi
```
feat: implement json-based action storage
feat: add "create new action" dialog
feat: add action edit and delete functionality
feat: add multiple action types support
```

---

## Faz 5: UI/UX İyileştirmeleri

**Hedef:** Profesyonel görünüm

### Alt Görevler
- [ ] Tray icon ve menu
  - System tray'e icon ekleme
  - Context menu (Show/Hide, Quit)
  - Minimize to tray
- [ ] Global shortcuts
  - Uygulama açma kısayolu (örn: `Ctrl+Shift+H`)
  - Specific action'lar için hotkey atama
- [ ] Animasyonlar ve transitions
  - Card hover effects
  - Loading states
  - Success/Error animations
- [ ] Theme sistemi
  - Dark/Light mode toggle
  - CSS variables kullanımı
  - OS theme'ini algılama

### Öğrenilecekler
- Electron Tray API
- Global shortcuts (globalShortcut API)
- CSS animations & transitions
- Theme switching patterns
- localStorage/electron-store

### Başarı Kriterleri
- ✅ Uygulama tray'de çalışabiliyor
- ✅ Global shortcut ile açılıp kapanabiliyor
- ✅ Animasyonlar smooth çalışıyor
- ✅ Dark/Light theme arası geçiş yapılabiliyor

### Commit Stratejisi
```
feat: add system tray integration
feat: implement global keyboard shortcuts
feat: add animations and transitions
feat: implement dark/light theme toggle
```

---

## Faz 6: Production Ready

**Hedef:** Dağıtıma hazır uygulama

### Alt Görevler
- [ ] Electron Builder konfigürasyonu
  - Build scripts
  - Icon set (256x256, 128x128, 64x64, 32x32, 16x16)
  - Installer ayarları (NSIS for Windows)
- [ ] Auto-updater (opsiyonel)
  - GitHub releases entegrasyonu
  - Update check interval
  - Update notification
- [ ] Performans optimizasyonu
  - Bundle size analizi
  - Code splitting
  - Lazy loading
  - Memory leak kontrolü
- [ ] Error logging ve monitoring
  - Crash reporter
  - Log dosyası oluşturma
  - Sentry/Bugsnag entegrasyonu (opsiyonel)
- [ ] Dokümantasyon
  - README.md güncelleme
  - Kullanım kılavuzu
  - Developer guide

### Öğrenilecekler
- Electron Builder best practices
- Code signing (Windows için)
- Auto-update mekanizması
- Performance profiling
- Production debugging strategies

### Başarı Kriterleri
- ✅ `.exe` installer üretilebiliyor
- ✅ Uygulama boyutu kabul edilebilir (<150MB)
- ✅ Auto-update çalışıyor (eğer implemente edilirse)
- ✅ Crash durumunda log kaydediliyor
- ✅ README profesyonel görünüyor

### Commit Stratejisi
```
build: configure electron-builder
feat: add auto-updater functionality
perf: optimize bundle size and performance
feat: implement error logging and crash reporting
docs: update readme and add user guide
```

---

## 🔧 Teknoloji Stack

### Core
- **Electron**: ^39.0.0
- **React**: ^18.x
- **Vite**: ^5.x

### Styling (Seçilecek)
- Option 1: **Tailwind CSS** (utility-first, hızlı prototipleme)
- Option 2: **styled-components** (CSS-in-JS)
- Option 3: **CSS Modules** (vanilla CSS, scoped)

### State Management
- Başlangıç: React useState/useContext
- İleri seviye: Zustand veya Jotai (hafif alternatifler)

### Build & Packaging
- **electron-builder**: Windows installer
- **electron-vite**: Development environment

### Utilities
- **child_process**: Sistem komutları
- **fs/promises**: Dosya işlemleri
- **path**: Yol yönetimi

---

## 📝 Git Commit Standartları

Bu proje [Conventional Commits](https://www.conventionalcommits.org/) standardını kullanır:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: Yeni özellik
- `fix`: Bug fix
- `docs`: Dokümantasyon değişikliği
- `style`: Code style (format, semicolon vb.)
- `refactor`: Ne bug fix ne de yeni özellik
- `perf`: Performans iyileştirmesi
- `test`: Test ekleme/düzenleme
- `build`: Build sistem değişiklikleri
- `ci`: CI konfigürasyonu
- `chore`: Diğer değişiklikler

### Örnekler
```bash
feat: add discord launcher action
fix: resolve electron hot reload issue
docs: update roadmap with phase 1 completion
refactor: extract action card into reusable component
perf: optimize action loading with lazy loading
```

---

## 🎓 Öğrenme Kaynakları

### Electron
- [Electron Docs](https://www.electronjs.org/docs)
- [Electron IPC Tutorial](https://www.electronjs.org/docs/latest/tutorial/ipc)
- [Electron Security](https://www.electronjs.org/docs/latest/tutorial/security)

### React + Electron
- [electron-vite](https://electron-vite.org/)
- [Vite Documentation](https://vitejs.dev/)

### Windows Automation
- [PowerShell Documentation](https://docs.microsoft.com/en-us/powershell/)
- [Node.js child_process](https://nodejs.org/api/child_process.html)

---

## 🚀 Başlangıç

```bash
# Development
pnpm run dev

# Build
pnpm run build

# Preview production build
pnpm run preview
```

---

**Son Güncelleme:** 31 Ekim 2025
**Durum:** Faz 1 başlangıç öncesi

