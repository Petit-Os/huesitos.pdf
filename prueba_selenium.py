from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import os
import time

# Configurar carpeta de descargas
download_dir = os.path.abspath("downloads")
os.makedirs(download_dir, exist_ok=True)

# Configurar opciones del navegador
chrome_options = Options()
chrome_options.add_experimental_option("prefs", {
    "download.default_directory": download_dir,
    "download.prompt_for_download": False,
    "download.directory_upgrade": True,
    "safebrowsing.enabled": True
})
chrome_options.add_argument("--start-maximized")

# Iniciar navegador con WebDriver Manager
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)

try:
    # Cargar la página
    driver.get("http://localhost:5173")

    # Esperar a que el botón esté disponible y hacer clic
    wait = WebDriverWait(driver, 10)
    download_button = wait.until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Descargar')]")))
    download_button.click()
    print("✅ Botón de descarga presionado")

    # Esperar unos segundos a que se descargue el archivo
    time.sleep(5)

    # Verificar si se descargó algún archivo
    files = os.listdir(download_dir)
    if files:
        print("✅ Archivo generado:", files)
    else:
        print("❌ No se detectó ningún archivo generado")

except Exception as e:
    print("❌ Error durante la prueba:", str(e))

finally:
    driver.quit()
