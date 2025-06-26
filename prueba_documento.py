from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import os
import time

# Configurar carpeta de descargas
download_dir = os.path.abspath("downloads")
os.makedirs(download_dir, exist_ok=True)

chrome_options = Options()
chrome_options.add_experimental_option("prefs", {
    "download.default_directory": download_dir,
    "download.prompt_for_download": False,
    "download.directory_upgrade": True,
    "safebrowsing.enabled": True
})

# Iniciar navegador
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
driver.get("http://localhost:5173")

# Esperar a que cargue la página
time.sleep(2)

# Buscar y hacer clic en el botón de descarga
try:
    download_button = driver.find_element(By.XPATH, "//button[contains(., 'Descargar')]")
    download_button.click()
    print("✅ Botón de descarga presionado")
except:
    print("❌ No se encontró el botón de descarga")

# Esperar unos segundos a que se descargue el archivo
time.sleep(5)

# Verificar si se descargó algún archivo
files = os.listdir(download_dir)
if files:
    print("✅ Archivo generado:", files)
else:
    print("❌ No se detectó ningún archivo generado")

driver.quit()
