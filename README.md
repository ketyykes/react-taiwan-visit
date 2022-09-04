## 實作重點
### react部分
- useReducer
  - 拆分複雜邏輯 
- custom hook
  - 複用類似的hook 
- SCSS Moudle
- 拆分檔案減少單一檔案程式碼數量過多
### 第三方library部分
- axios
  - 使用createInstance拆分APIRoute
- fontawesome
  - 模組化引入react-fontawesome 
- react-leaflet
  - 引入react-leaflet載入地圖座標 
- react-route使用以下內容
  -  useNavigate
  -  Link
  -  useSearchParams
  -  useLocation
- redux-persist
  - 針對特定state持久化
- react-redux
  - 使用react-toolkit建置global status
  - 使用useDispatch、useSelect傳遞status
