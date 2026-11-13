# Configuración de Terminal Bash en Ubuntu

![Resultado Final Terminal](/home/jdswe/Documents/OpenCode/Customize%20bash%20terminal/Resources/Terminal.png)

Guía paso a paso para personalizar y optimizar la experiencia de uso en la terminal Bash de Ubuntu integrando Oh My Posh, Eza, fuentes Nerd Fonts y FZF.

---

## 1. Actualizar el sistema

Antes de instalar cualquier paquete o herramienta, actualiza el sistema:

```bash
sudo apt update && sudo apt upgrade -y
```

---

## 2. Configurar perfil y preferencias de la terminal

1. Abre las **Preferencias** del menú superior de la terminal.

   ![Preferencias de la terminal](/home/jdswe/Documents/OpenCode/Customize%20bash%20terminal/Resources/Preferences.png)

2. Ve a la sección **Profiles** (Perfiles) y crea uno nuevo.

   ![Crear perfil](/home/jdswe/Documents/OpenCode/Customize%20bash%20terminal/Resources/CreateProfile.png)

3. Selecciona el nuevo perfil, haz clic en **Editar** y activa la opción **Use bright colors for bold text** (*Usar colores brillantes para texto en negrita*). Esto mejorará el acabado visual de la fuente.

   ![Editar perfil](/home/jdswe/Documents/OpenCode/Customize%20bash%20terminal/Resources/EditProfile.png)

*(Opcional: Si utilizas VS Code, recuerda ajustar el perfil predeterminado de la terminal integrando esta misma configuración).*

---

## 3. Instalar Oh My Posh

> **Sitio Web Oficial:** [https://ohmyposh.dev/](https://ohmyposh.dev/)

Ejecuta el script oficial de instalación:

```bash
curl -s https://ohmyposh.dev/install.sh | bash -s
```

Verifica que la instalación fue exitosa:

```bash
oh-my-posh --version
```

---

## 4. Instalar y configurar FiraCode Nerd Font

Instala la tipografía necesaria para mostrar iconos en la terminal:

```bash
oh-my-posh font install FiraCode
```

Para listar las fuentes instaladas o verificar la presencia de FiraCode:

```bash
oh-my-posh font list
fc-list | grep -i "FiraCode Nerd Font"
```

### Configuración en la terminal:
1. Dirígete a la ventana de **Preferencias** de la terminal.
2. Selecciona la pestaña **Appearance** (Apariencia) y desplázate hacia abajo.
3. Elige la tipografía: **`FiraCode Nerd Font Mono`** (Medium) a un tamaño de **`12`**.

![Apariencia y tipografía](/home/jdswe/Documents/OpenCode/Customize%20bash%20terminal/Resources/Appereance.png)

4. Actualiza la caché del sistema de fuentes:

```bash
fc-cache -f -v
```

---

## 5. Configurar el tema de Oh My Posh

Abre el archivo de configuración `~/.bashrc`:

```bash
nano ~/.bashrc
```

Agrega la siguiente línea al final del archivo:

```bash
eval "$(oh-my-posh init bash --config pure)"
```

Aplica los cambios en la sesión actual:

```bash
source ~/.bashrc
```

---

## 6. Instalar Eza (Reemplazo moderno para `ls`)

> **Sitio Web Oficial:** [https://eza.rocks/](https://eza.rocks/)

Agrega el repositorio oficial e instala `eza`:

```bash
sudo mkdir -p /etc/apt/keyrings
wget -qO- https://raw.githubusercontent.com/eza-community/eza/main/deb.asc | sudo gpg --dearmor -o /etc/apt/keyrings/gierens.gpg
echo "deb [signed-by=/etc/apt/keyrings/gierens.gpg] http://deb.gierens.de stable main" | sudo tee /etc/apt/sources.list.d/gierens.list
sudo chmod 644 /etc/apt/keyrings/gierens.gpg /etc/apt/sources.list.d/gierens.list
sudo apt update
sudo apt install -y eza
```

---

## 7. Configurar alias de Eza

Abre nuevamente el archivo `~/.bashrc`:

```bash
nano ~/.bashrc
```

Agrega el siguiente bloque de alias al final del archivo:

```bash
# ==================================================
# EZA - Modern LS configuration
# ==================================================

if command -v eza >/dev/null 2>&1; then

    # Default LS
    alias ls='eza --icons --group-directories-first'

    # Detailed listings
    alias ll='eza -l --icons --git --group-directories-first'
    alias la='eza -a --icons --group-directories-first'
    alias lla='eza -la --icons --git --group-directories-first'

    # Directory tree
    alias lt='eza --tree --level=2 --icons --group-directories-first'
    alias lta='eza --tree --level=3 -a --icons --group-directories-first'

    # Specialized listings
    alias l1='eza -1 --icons'
    alias ld='eza -D --icons'
    alias lf='eza -f --icons'
    alias lg='eza -l --git --icons'

    # Original Linux ls
    alias lso='/usr/bin/ls'

fi
```

---

## 8. Instalar y configurar FZF (Búsqueda difusa)

> **Sitio Web Oficial:** [https://junegunn.github.io/fzf/installation/](https://junegunn.github.io/fzf/installation/)

Agrega la inicialización de FZF en tu `~/.bashrc` para que se active automáticamente al abrir la terminal:

```bash
echo 'eval "$(fzf --bash)"' >> ~/.bashrc
```

### Atajos de teclado útiles:

| Atajo | Función |
| --- | --- |
| `Ctrl + R` | Buscar comandos en el historial |
| `Ctrl + T` | Buscar archivos y carpetas rápidamente |
| `Alt + C` | Buscar y cambiar de directorio |
| `** + TAB` | Autocompletado interactivo para rutas/comandos |

---

## 9. Configurar tema de Eza (Opcional)

Si deseas añadir el tema **Kanagawa Wave** para la herramienta `eza`:

```bash
mkdir -p ~/.config/eza && curl -fsSL https://raw.githubusercontent.com/eza-community/eza-themes/main/themes/kanagawa-wave.yml -o ~/.config/eza/theme.yml
```

Verifica la instalación del tema:

```bash
ls -lh ~/.config/eza/theme.yml
```

---

## Aplicar Cambios

Cada vez que realices una modificación en `~/.bashrc`, ejecuta el siguiente comando para reactivar los cambios:

```bash
source ~/.bashrc
```

> **Nota:** Ten en cuenta que **Oh My Posh** y **Eza** gestionan las configuraciones de sus temas de forma independiente.