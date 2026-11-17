/* ==========================================================================
   bash.guide — Contenido de la Guía de Configuración
   Español (predeterminado), Português, English.
   Fiel al contenido original de CustomizeBashTerminal.md.
   Todos los comandos, sintaxis, rutas y paquetes permanecen intactos.
   ========================================================================== */

window.GUIDE_CONTENT = {
  header: {
    title: {
      es: "Configuración de Terminal Bash en Ubuntu",
      en: "Ubuntu Bash Terminal Configuration",
      pt: "Configuração do Terminal Bash no Ubuntu"
    },
    subtitle: {
      es: "Guía paso a paso para personalizar y optimizar la experiencia de uso en la terminal Bash de Ubuntu integrando Oh My Posh, Eza, fuentes Nerd Fonts y FZF.",
      en: "Step-by-step guide to customizing and optimizing the Ubuntu Bash terminal experience integrating Oh My Posh, Eza, Nerd Fonts, and FZF.",
      pt: "Guia passo a passo para personalizar e otimizar a experiência no terminal Bash do Ubuntu integrando Oh My Posh, Eza, fontes Nerd Fonts e FZF."
    },
    heroImage: {
      src: "assets/images/Terminal.png",
      alt: {
        es: "Resultado Final Terminal",
        en: "Terminal Final Result",
        pt: "Resultado Final do Terminal"
      },
      caption: {
        es: "Resultado Final Terminal",
        en: "Terminal Final Result",
        pt: "Resultado Final do Terminal"
      }
    }
  },

  sections: [
    {
      id: "paso-1",
      number: "1",
      title: {
        es: "1. Actualizar el sistema",
        en: "1. Update the system",
        pt: "1. Atualizar o sistema"
      },
      lead: {
        es: "Antes de instalar cualquier paquete o herramienta, actualiza el sistema:",
        en: "Before installing any package or tool, update the system:",
        pt: "Antes de instalar qualquer pacote ou ferramenta, atualize o sistema:"
      },
      blocks: [
        {
          type: "code",
          kind: "bash",
          code: "sudo apt update && sudo apt upgrade -y"
        }
      ]
    },

    {
      id: "paso-2",
      number: "2",
      title: {
        es: "2. Configurar perfil y preferencias de la terminal",
        en: "2. Configure terminal profile and preferences",
        pt: "2. Configurar perfil e preferências do terminal"
      },
      lead: null,
      blocks: [
        {
          type: "step_item",
          number: "1",
          text: {
            es: "Abre las **Preferencias** del menú superior de la terminal.",
            en: "Open **Preferences** from the terminal's top menu.",
            pt: "Abra as **Preferências** no menu superior do terminal."
          },
          image: {
            src: "assets/images/Preferences.png",
            alt: {
              es: "Preferencias de la terminal",
              en: "Terminal Preferences",
              pt: "Preferências do terminal"
            },
            caption: {
              es: "Preferencias de la terminal",
              en: "Terminal Preferences",
              pt: "Preferências do terminal"
            }
          }
        },
        {
          type: "step_item",
          number: "2",
          text: {
            es: "Ve a la sección **Profiles** (Perfiles) y crea uno nuevo.",
            en: "Go to the **Profiles** section and create a new one.",
            pt: "Vá para a seção **Profiles** (Perfis) e crie um novo."
          },
          image: {
            src: "assets/images/CreateProfile.png",
            alt: {
              es: "Crear perfil",
              en: "Create profile",
              pt: "Criar perfil"
            },
            caption: {
              es: "Crear perfil",
              en: "Create profile",
              pt: "Criar perfil"
            }
          }
        },
        {
          type: "step_item",
          number: "3",
          text: {
            es: "Selecciona el nuevo perfil, haz clic en **Editar** y activa la opción **Use bright colors for bold text** (*Usar colores brillantes para texto en negrita*). Esto mejorará el acabado visual de la fuente.",
            en: "Select the new profile, click **Edit**, and enable **Use bright colors for bold text**. This will improve the visual appearance of the font.",
            pt: "Selecione o novo perfil, clique em **Editar** e ative a opção **Use bright colors for bold text** (*Usar cores brilhantes para texto em negrito*). Isso melhorará o acabamento visual da fonte."
          },
          image: {
            src: "assets/images/EditProfile.png",
            alt: {
              es: "Editar perfil",
              en: "Edit profile",
              pt: "Editar perfil"
            },
            caption: {
              es: "Editar perfil",
              en: "Edit profile",
              pt: "Editar perfil"
            }
          }
        },
        {
          type: "note",
          text: {
            es: "*(Opcional: Si utilizas VS Code, recuerda ajustar el perfil predeterminado de la terminal integrando esta misma configuración).*",
            en: "*(Optional: If you use VS Code, remember to adjust the default integrated terminal profile to use this same configuration).*",
            pt: "*(Opcional: Se você utiliza o VS Code, lembre-se de ajustar o perfil padrão do terminal integrando essa mesma configuração).*"
          }
        }
      ]
    },

    {
      id: "paso-3",
      number: "3",
      title: {
        es: "3. Instalar Oh My Posh",
        en: "3. Install Oh My Posh",
        pt: "3. Instalar o Oh My Posh"
      },
      lead: null,
      blocks: [
        {
          type: "link_box",
          label: {
            es: "Sitio Web Oficial:",
            en: "Official Website:",
            pt: "Site Oficial:"
          },
          url: "https://ohmyposh.dev/"
        },
        {
          type: "p",
          text: {
            es: "Ejecuta el script oficial de instalación:",
            en: "Run the official installation script:",
            pt: "Execute o script oficial de instalação:"
          }
        },
        {
          type: "code",
          kind: "bash",
          code: "curl -s https://ohmyposh.dev/install.sh | bash -s"
        },
        {
          type: "p",
          text: {
            es: "Verifica que la instalación fue exitosa:",
            en: "Verify that the installation was successful:",
            pt: "Verifique se a instalação foi bem-sucedida:"
          }
        },
        {
          type: "code",
          kind: "bash",
          code: "oh-my-posh --version"
        }
      ]
    },

    {
      id: "paso-4",
      number: "4",
      title: {
        es: "4. Instalar y configurar FiraCode Nerd Font",
        en: "4. Install and configure FiraCode Nerd Font",
        pt: "4. Instalar e configurar a FiraCode Nerd Font"
      },
      lead: null,
      blocks: [
        {
          type: "p",
          text: {
            es: "Instala la tipografía necesaria para mostrar iconos en la terminal:",
            en: "Install the font required to display icons in the terminal:",
            pt: "Instale a tipografia necessária para exibir ícones no terminal:"
          }
        },
        {
          type: "code",
          kind: "bash",
          code: "oh-my-posh font install FiraCode"
        },
        {
          type: "p",
          text: {
            es: "Para listar las fuentes instaladas o verificar la presencia de FiraCode:",
            en: "To list installed fonts or verify the presence of FiraCode:",
            pt: "Para listar as fontes instaladas ou verificar a presença da FiraCode:"
          }
        },
        {
          type: "code",
          kind: "bash",
          code: "oh-my-posh font list\nfc-list | grep -i \"FiraCode Nerd Font\""
        },
        {
          type: "h3",
          text: {
            es: "Configuración en la terminal:",
            en: "Terminal configuration:",
            pt: "Configuração no terminal:"
          }
        },
        {
          type: "steps_list",
          items: [
            {
              es: "Dirígete a la ventana de **Preferencias** de la terminal.",
              en: "Go to the terminal **Preferences** window.",
              pt: "Acesse a janela de **Preferências** do terminal."
            },
            {
              es: "Selecciona la pestaña **Appearance** (Apariencia) y desplázate hacia abajo.",
              en: "Select the **Appearance** tab and scroll down.",
              pt: "Selecione a aba **Appearance** (Aparência) e role para baixo."
            },
            {
              es: "Elige la tipografía: **`FiraCode Nerd Font Mono`** (Medium) a un tamaño de **`12`**.",
              en: "Choose the font: **`FiraCode Nerd Font Mono`** (Medium) at size **`12`**.",
              pt: "Escolha a tipografia: **`FiraCode Nerd Font Mono`** (Medium) no tamanho **`12`**."
            }
          ]
        },
        {
          type: "image",
          src: "assets/images/Appereance.png",
          alt: {
            es: "Apariencia y tipografía",
            en: "Appearance and font",
            pt: "Aparência e tipografia"
          },
          caption: {
            es: "Apariencia y tipografía",
            en: "Appearance and font",
            pt: "Aparência e tipografia"
          }
        },
        {
          type: "p",
          text: {
            es: "4. Actualiza la caché del sistema de fuentes:",
            en: "4. Refresh the system font cache:",
            pt: "4. Atualize o cache do sistema de fontes:"
          }
        },
        {
          type: "code",
          kind: "bash",
          code: "fc-cache -f -v"
        }
      ]
    },

    {
      id: "paso-5",
      number: "5",
      title: {
        es: "5. Configurar el tema de Oh My Posh",
        en: "5. Configure Oh My Posh theme",
        pt: "5. Configurar o tema do Oh My Posh"
      },
      lead: {
        es: "El tema o prompt de la terminal depende de tu preferencia personal. Oh My Posh ofrece cientos de temas visuales predeterminados (como pure, kanagawa, agnoster, jandedobbeleer, tokyonight_storm, etc.); solo debes elegir el que más te guste de la página oficial y colocar su nombre en tu archivo ~/.bashrc.",
        en: "The terminal prompt theme depends on your personal taste. Oh My Posh offers hundreds of visual themes (such as pure, kanagawa, agnoster, jandedobbeleer, tokyonight_storm, etc.); simply pick whichever one you prefer from the official page and set its name inside ~/.bashrc.",
        pt: "O tema ou prompt do terminal depende da sua preferência pessoal. O Oh My Posh disponibiliza centenas de temas visuais (como pure, kanagawa, agnoster, jandedobbeleer, tokyonight_storm, etc.); basta escolher o que mais gostar na página oficial e inserir o nome dele no ~/.bashrc."
      },
      blocks: [
        {
          type: "link_box",
          label: {
            es: "Explorar catálogo oficial de temas de Oh My Posh:",
            en: "Browse official Oh My Posh themes catalog:",
            pt: "Explorar catálogo oficial de temas do Oh My Posh:"
          },
          url: "https://ohmyposh.dev/docs/themes"
        },
        {
          type: "p",
          text: {
            es: "Abre el archivo de configuración `~/.bashrc`:",
            en: "Open the `~/.bashrc` configuration file:",
            pt: "Abra o arquivo de configuração `~/.bashrc`:"
          }
        },
        {
          type: "code",
          kind: "bash",
          code: "nano ~/.bashrc"
        },
        {
          type: "p",
          text: {
            es: "Agrega la siguiente línea al final del archivo. Puedes sustituir `pure` por el nombre del tema que hayas elegido de la página oficial (por ejemplo `pure`, `kanagawa`, `agnoster`, etc.):",
            en: "Add the following line to the end of the file. You can replace `pure` with the name of whichever theme you chose from the official page (for example `pure`, `kanagawa`, `agnoster`, etc.):",
            pt: "Adicione a seguinte linha ao final do arquivo. Você pode substituir `pure` pelo nome do tema que escolheu na página oficial (por exemplo `pure`, `kanagawa`, `agnoster`, etc.):"
          }
        },
        {
          type: "code",
          kind: "bash",
          code: 'eval "$(oh-my-posh init bash --config pure)"'
        },
        {
          type: "p",
          text: {
            es: "Aplica los cambios en la sesión actual:",
            en: "Apply changes in the current session:",
            pt: "Aplique as alterações na sessão atual:"
          }
        },
        {
          type: "code",
          kind: "bash",
          code: "source ~/.bashrc"
        }
      ]
    },

    {
      id: "paso-6",
      number: "6",
      title: {
        es: "6. Instalar Eza (Reemplazo moderno para `ls`)",
        en: "6. Install Eza (Modern replacement for `ls`)",
        pt: "6. Instalar o Eza (Substituto moderno para `ls`)"
      },
      lead: null,
      blocks: [
        {
          type: "link_box",
          label: {
            es: "Sitio Web Oficial:",
            en: "Official Website:",
            pt: "Site Oficial:"
          },
          url: "https://eza.rocks/"
        },
        {
          type: "p",
          text: {
            es: "Agrega el repositorio oficial e instala `eza`:",
            en: "Add the official repository and install `eza`:",
            pt: "Adicione o repositório oficial e instale o `eza`:"
          }
        },
        {
          type: "code",
          kind: "bash",
          code: "sudo mkdir -p /etc/apt/keyrings\nwget -qO- https://raw.githubusercontent.com/eza-community/eza/main/deb.asc | sudo gpg --dearmor -o /etc/apt/keyrings/gierens.gpg\necho \"deb [signed-by=/etc/apt/keyrings/gierens.gpg] http://deb.gierens.de stable main\" | sudo tee /etc/apt/sources.list.d/gierens.list\nsudo chmod 644 /etc/apt/keyrings/gierens.gpg /etc/apt/sources.list.d/gierens.list\nsudo apt update\nsudo apt install -y eza"
        }
      ]
    },

    {
      id: "paso-7",
      number: "7",
      title: {
        es: "7. Configurar alias de Eza",
        en: "7. Configure Eza aliases",
        pt: "7. Configurar aliases do Eza"
      },
      lead: null,
      blocks: [
        {
          type: "p",
          text: {
            es: "Abre nuevamente el archivo `~/.bashrc`:",
            en: "Open `~/.bashrc` again:",
            pt: "Abra novamente o arquivo `~/.bashrc`:"
          }
        },
        {
          type: "code",
          kind: "bash",
          code: "nano ~/.bashrc"
        },
        {
          type: "p",
          text: {
            es: "Agrega el siguiente bloque de alias al final del archivo:",
            en: "Add the following alias block to the end of the file:",
            pt: "Adicione o seguinte bloco de aliases ao final do arquivo:"
          }
        },
        {
          type: "code",
          kind: "bash",
          code: `# ==================================================\n# EZA - Modern LS configuration\n# ==================================================\n\nif command -v eza >/dev/null 2>&1; then\n\n    # Default LS\n    alias ls='eza --icons --group-directories-first'\n\n    # Detailed listings\n    alias ll='eza -l --icons --git --group-directories-first'\n    alias la='eza -a --icons --group-directories-first'\n    alias lla='eza -la --icons --git --group-directories-first'\n\n    # Directory tree\n    alias lt='eza --tree --level=2 --icons --group-directories-first'\n    alias lta='eza --tree --level=3 -a --icons --group-directories-first'\n\n    # Specialized listings\n    alias l1='eza -1 --icons'\n    alias ld='eza -D --icons'\n    alias lf='eza -f --icons'\n    alias lg='eza -l --git --icons'\n\n    # Original Linux ls\n    alias lso='/usr/bin/ls'\n\nfi`
        }
      ]
    },

    {
      id: "paso-8",
      number: "8",
      title: {
        es: "8. Instalar y configurar FZF (Búsqueda difusa)",
        en: "8. Install and configure FZF (Fuzzy search)",
        pt: "8. Instalar e configurar o FZF (Busca difusa)"
      },
      lead: null,
      blocks: [
        {
          type: "link_box",
          label: {
            es: "Sitio Web Oficial:",
            en: "Official Website:",
            pt: "Site Oficial:"
          },
          url: "https://junegunn.github.io/fzf/installation/"
        },
        {
          type: "p",
          text: {
            es: "Agrega la inicialización de FZF en tu `~/.bashrc` para que se active automáticamente al abrir la terminal:",
            en: "Add FZF initialization to your `~/.bashrc` so it loads automatically on terminal startup:",
            pt: "Adicione a inicialização do FZF ao seu `~/.bashrc` para que seja ativado automaticamente ao abrir o terminal:"
          }
        },
        {
          type: "code",
          kind: "bash",
          code: "echo 'eval \"$(fzf --bash)\"' >> ~/.bashrc"
        },
        {
          type: "h3",
          text: {
            es: "Atajos de teclado útiles:",
            en: "Useful keyboard shortcuts:",
            pt: "Atalhos de teclado úteis:"
          }
        },
        {
          type: "table",
          headers: [
            { es: "Atajo", en: "Shortcut", pt: "Atalho" },
            { es: "Función", en: "Function", pt: "Função" }
          ],
          rows: [
            [{ kind: "kbd", value: "Ctrl + R" }, { es: "Buscar comandos en el historial", en: "Search commands in history", pt: "Buscar comandos no histórico" }],
            [{ kind: "kbd", value: "Ctrl + T" }, { es: "Buscar archivos y carpetas rápidamente", en: "Quickly find files and folders", pt: "Buscar arquivos e pastas rapidamente" }],
            [{ kind: "kbd", value: "Alt + C" }, { es: "Buscar y cambiar de directorio", en: "Search and change directory", pt: "Buscar e mudar de diretório" }],
            [{ kind: "kbd", value: "** + TAB" }, { es: "Autocompletado interactivo para rutas/comandos", en: "Interactive autocompletion for paths/commands", pt: "Autocompletar interativo para caminhos/comandos" }]
          ]
        }
      ]
    },

    {
      id: "paso-9",
      number: "9",
      title: {
        es: "9. Configurar tema de Eza (Opcional)",
        en: "9. Configure Eza theme (Optional)",
        pt: "9. Configurar tema do Eza (Opcional)"
      },
      lead: null,
      blocks: [
        {
          type: "p",
          text: {
            es: "Si deseas añadir el tema **Kanagawa Wave** para la herramienta `eza`:",
            en: "If you want to add the **Kanagawa Wave** theme for `eza`:",
            pt: "Se desejar adicionar o tema **Kanagawa Wave** para a ferramenta `eza`:"
          }
        },
        {
          type: "code",
          kind: "bash",
          code: "mkdir -p ~/.config/eza && curl -fsSL https://raw.githubusercontent.com/eza-community/eza-themes/main/themes/kanagawa-wave.yml -o ~/.config/eza/theme.yml"
        },
        {
          type: "p",
          text: {
            es: "Verifica la instalación del tema:",
            en: "Verify theme installation:",
            pt: "Verifique a instalação do tema:"
          }
        },
        {
          type: "code",
          kind: "bash",
          code: "ls -lh ~/.config/eza/theme.yml"
        }
      ]
    },

    {
      id: "paso-10",
      number: "10",
      title: {
        es: "Aplicar Cambios",
        en: "Apply Changes",
        pt: "Aplicar Alterações"
      },
      lead: null,
      blocks: [
        {
          type: "p",
          text: {
            es: "Cada vez que realices una modificación en `~/.bashrc`, ejecuta el siguiente comando para reactivar los cambios:",
            en: "Every time you make a change to `~/.bashrc`, run the following command to reload the changes:",
            pt: "Cada vez que realizar uma modificação no `~/.bashrc`, execute o comando a seguir para reativar as alterações:"
          }
        },
        {
          type: "code",
          kind: "bash",
          code: "source ~/.bashrc"
        },
        {
          type: "callout",
          tone: "note",
          title: {
            es: "Nota:",
            en: "Note:",
            pt: "Nota:"
          },
          text: {
            es: "Ten en cuenta que **Oh My Posh** y **Eza** gestionan las configuraciones de sus temas de forma independiente.",
            en: "Keep in mind that **Oh My Posh** and **Eza** manage their theme configurations independently.",
            pt: "Tenha em mente que o **Oh My Posh** e o **Eza** gerenciam as configurações de seus temas de forma independente."
          }
        }
      ]
    },

    {
      id: "powershell",
      number: "11",
      title: {
        es: "11. Configurar PowerShell",
        en: "11. Set up PowerShell",
        pt: "11. Configurar o PowerShell"
      },
      lead: {
        es: "PowerShell es otra terminal, pero reutiliza gran parte de la configuración que ya montamos en Bash: Oh My Posh, Eza y los mismos atajos.",
        en: "PowerShell is another terminal, but it reuses much of the configuration we already set up in Bash: Oh My Posh, Eza, and the same shortcuts.",
        pt: "O PowerShell é outro terminal, mas reutiliza grande parte da configuração que já montamos no Bash: Oh My Posh, Eza e os mesmos atalhos."
      },
      blocks: [
        {
          type: "p",
          text: {
            es: "Instala el módulo **Terminal-Icons** desde la galería oficial de PowerShell. Si te pregunta si deseas instalar módulos de un repositorio no confiable, selecciona **A** (Sí a todo):",
            en: "Install the **Terminal-Icons** module from the official PowerShell gallery. If it asks whether you want to install modules from an untrusted repository, select **A** (Yes to All):",
            pt: "Instale o módulo **Terminal-Icons** na galeria oficial do PowerShell. Se perguntar se deseja instalar módulos de um repositório não confiável, selecione **A** (Sim para tudo):"
          }
        },
        {
          type: "code",
          kind: "powershell",
          code: "Install-Module -Name Terminal-Icons -Repository PSGallery"
        },
        {
          type: "p",
          text: {
            es: "Crea el archivo de perfil de PowerShell si todavía no existe:",
            en: "Create the PowerShell profile file if it does not exist yet:",
            pt: "Crie o arquivo de perfil do PowerShell caso ele ainda não exista:"
          }
        },
        {
          type: "code",
          kind: "powershell",
          code: "New-Item -Path $PROFILE -Type File -Force"
        },
        {
          type: "p",
          text: {
            es: "Abre el perfil con nano para editarlo:",
            en: "Open the profile with nano to edit it:",
            pt: "Abra o perfil com nano para editá-lo:"
          }
        },
        {
          type: "code",
          kind: "powershell",
          code: "nano $PROFILE"
        },
        {
          type: "p",
          text: {
            es: "Pega la siguiente configuración. Puedes cambiar `pure` por el tema de **Oh My Posh** que prefieras:",
            en: "Paste the following configuration. You can replace `pure` with whichever **Oh My Posh** theme you prefer:",
            pt: "Cole a seguinte configuração. Você pode substituir `pure` pelo tema do **Oh My Posh** que preferir:"
          }
        },
        {
          type: "code",
          kind: "powershell",
          code: [
            'oh-my-posh init pwsh --config "pure" | Invoke-Expression',
            "Import-Module Terminal-Icons",
            "Set-PSReadLineOption -PredictionViewStyle ListView",
            "",
            "if (Get-Command eza -ErrorAction SilentlyContinue) {",
            "",
            "    # Default LS",
            "    function ls {",
            "        eza --icons --group-directories-first @args",
            "    }",
            "",
            "    # Detailed listings",
            "    function ll {",
            "        eza -l --icons --git --group-directories-first @args",
            "    }",
            "",
            "    # All files",
            "    function la {",
            "        eza -a --icons --group-directories-first @args",
            "    }",
            "",
            "    # Detailed listing with hidden files",
            "    function lla {",
            "        eza -la --icons --git --group-directories-first @args",
            "    }",
            "",
            "    # Directory tree",
            "    function lt {",
            "        eza --tree --level=2 --icons --group-directories-first @args",
            "    }",
            "",
            "    function lta {",
            "        eza --tree --level=3 -a --icons --group-directories-first @args",
            "    }",
            "",
            "    # Specialized listings",
            "    function l1 {",
            "        eza -1 --icons @args",
            "    }",
            "",
            "    function ld {",
            "        eza -D --icons @args",
            "    }",
            "",
            "    function lf {",
            "        eza -f --icons @args",
            "    }",
            "",
            "    function lg {",
            "        eza -l --git --icons @args",
            "    }",
            "}"
          ].join("\n")
        },
        {
          type: "callout",
          tone: "note",
          title: {
            es: "Nota:",
            en: "Note:",
            pt: "Nota:"
          },
          text: {
            es: "Cierra y vuelve a abrir PowerShell, o recarga el perfil con `. $PROFILE`, para aplicar los cambios.",
            en: "Close and reopen PowerShell, or reload the profile with `. $PROFILE`, to apply the changes.",
            pt: "Feche e reabra o PowerShell, ou recarregue o perfil com `. $PROFILE`, para aplicar as alterações."
          }
        }
      ]
    },

    {
      id: "resumen",
      isStep: false,
      badge: {
        es: "RESUMEN",
        en: "SUMMARY",
        pt: "RESUMO"
      },
      title: {
        es: "Resumen de Configuración, Herramientas y Atajos",
        en: "Configuration, Tools & Shortcuts Summary",
        pt: "Resumo de Configuração, Ferramentas e Atalhos"
      },
      lead: {
        es: "Hoja de referencia consolidada con la arquitectura del entorno, la tabla completa de atajos interactivos de FZF, la guía de alias de Eza y el rol técnico de cada componente configurado.",
        en: "Consolidated cheat sheet reference covering the environment architecture, the complete FZF interactive shortcuts table, the Eza alias guide, and the technical role of each configured component.",
        pt: "Folha de referência consolidada cobrindo a arquitetura do ambiente, a tabela completa de atalhos interativos do FZF, o guia de aliases do Eza e o papel técnico de cada componente configurado."
      },
      blocks: [
        {
          type: "h3",
          text: {
            es: "1. Roles de las herramientas configuradas",
            en: "1. Roles of configured tools",
            pt: "1. Papéis das ferramentas configuradas"
          }
        },
        {
          type: "p",
          text: {
            es: "Cada una de las herramientas instaladas cumple una función especializada dentro de la experiencia de la terminal:",
            en: "Each installed tool fulfills a specialized role within the terminal experience:",
            pt: "Cada uma das ferramentas instaladas cumpre uma função especializada dentro da experiência do terminal:"
          }
        },
        {
          type: "table",
          headers: [
            { es: "Herramienta", en: "Tool", pt: "Ferramenta" },
            { es: "Rol principal y beneficios", en: "Main Role & Benefits", pt: "Papel principal e benefícios" },
            { es: "Archivo / Comando clave", en: "Key File / Command", pt: "Arquivo / Comando chave" }
          ],
          rows: [
            [
              { kind: "code", value: "Oh My Posh" },
              {
                es: "Motor de temas para el prompt. Proporciona un prompt visual y reactivo con indicador de directorio, estado de Git (rama, cambios pendientes) y tiempo de ejecución sin ralentizar la terminal.",
                en: "Prompt theme engine. Provides a visual, reactive prompt showing current directory, Git status (branch, pending changes), and execution time without slowing down the terminal.",
                pt: "Motor de temas para o prompt. Fornece um prompt visual e reativo com indicador de diretório, status do Git (ramo, alterações pendentes) e tempo de execução sem lentidão."
              },
              { kind: "code", value: "~/.cache/oh-my-posh/themes/pure.omp.json" }
            ],
            [
              { kind: "code", value: "FiraCode NF" },
              {
                es: "Fuente monoespaciada para programadores parcheada con miles de glifos e iconos (*Nerd Fonts*) y ligaduras de código. Evita iconos rotos o cuadrados vacíos en los temas.",
                en: "Developer monospace font patched with thousands of glyphs and icons (*Nerd Fonts*) plus coding ligatures. Prevents broken icons or empty squares in themes.",
                pt: "Fonte monoespaçada para desenvolvedores com milhares de glifos e ícones (*Nerd Fonts*) e ligaduras de código. Evita ícones quebrados ou quadrados vazios nos temas."
              },
              { kind: "code", value: "~/.local/share/fonts/" }
            ],
            [
              { kind: "code", value: "Eza" },
              {
                es: "Reemplazo moderno de `ls` escrito en Rust. Agrega colores según permisos y tipos MIME, detección automática de iconos, integración con Git y visualización en árbol.",
                en: "Modern `ls` replacement written in Rust. Adds colors based on permissions and MIME types, automatic icon detection, Git integration, and tree view.",
                pt: "Substituição moderna do `ls` escrita em Rust. Adiciona cores por permissões e tipos MIME, detecção automática de ícones, integração com Git e visualização em árvore."
              },
              { kind: "code", value: "~/.config/eza/theme.yml" }
            ],
            [
              { kind: "code", value: "FZF" },
              {
                es: "Buscador difuso interactivo de propósito general. Filtra en tiempo real historiales de comandos, árboles de archivos y procesos del sistema conforme vas tecleando.",
                en: "General-purpose interactive fuzzy finder. Real-time filtering of command history, file trees, and system processes as you type.",
                pt: "Buscador difuso interativo de propósito geral. Filtra em tempo real históricos de comandos, árvores de arquivos e processos do sistema conforme você digita."
              },
              { kind: "code", value: "eval \"$(fzf --bash)\"" }
            ],
            [
              { kind: "code", value: "~/.bashrc" },
              {
                es: "Script de inicialización de Bash que se ejecuta al abrir cada sesión de terminal. En él se centralizan la inicialización de Oh My Posh, los alias de Eza y FZF.",
                en: "Bash startup script executed when opening each terminal session. It centralizes Oh My Posh initialization, Eza aliases, and FZF integration.",
                pt: "Script de inicialização do Bash executado ao abrir cada sessão do terminal. Centraliza a inicialização do Oh My Posh, aliases do Eza e FZF."
              },
              { kind: "code", value: "source ~/.bashrc" }
            ]
          ]
        },
        {
          type: "h3",
          text: {
            es: "2. Hoja de atajos interactivos de FZF (Fuzzy Finder)",
            en: "2. FZF Interactive Shortcuts Reference (Fuzzy Finder)",
            pt: "2. Folha de atalhos interativos do FZF (Fuzzy Finder)"
          }
        },
        {
          type: "p",
          text: {
            es: "FZF transforma la forma de interactuar con la línea de comandos mediante 4 atajos indispensables:",
            en: "FZF transforms how you interact with the command line through 4 indispensable shortcuts:",
            pt: "O FZF transforma a maneira de interagir com a linha de comando por meio de 4 atalhos indispensáveis:"
          }
        },
        {
          type: "table",
          headers: [
            { es: "Atajo", en: "Shortcut", pt: "Atalho" },
            { es: "Acción interactiva", en: "Interactive Action", pt: "Ação interativa" },
            { es: "Cómo usarlo y flujo de trabajo", en: "How to use & Workflow", pt: "Como usar e fluxo de trabalho" }
          ],
          rows: [
            [
              { kind: "kbd", value: "Ctrl + R" },
              {
                es: "Búsqueda en Historial de Comandos",
                en: "Command History Search",
                pt: "Busca no Histórico de Comandos"
              },
              {
                es: "Abre una ventana flotante para buscar cualquier comando ejecutado en el pasado. Escribe fragmentos de palabras; presiona `Enter` para ejecutar el comando o `TAB` para editarlo en el prompt.",
                en: "Opens a floating window to search any past command. Type keyword fragments; press `Enter` to run the command or `TAB` to put it in the prompt for editing.",
                pt: "Abre uma janela flutuante para buscar qualquer comando anterior. Digite fragmentos de palavras; pressione `Enter` para executar ou `TAB` para editá-lo no prompt."
              }
            ],
            [
              { kind: "kbd", value: "Ctrl + T" },
              {
                es: "Buscador de Archivos y Carpetas",
                en: "File & Directory Finder",
                pt: "Localizador de Arquivos e Pastas"
              },
              {
                es: "Busca interactivamente archivos en el directorio actual y subcarpetas, e inserta la ruta seleccionada directamente en tu comando activo (ejemplo: escribe `nano ` y presiona `Ctrl+T`).",
                en: "Interactively searches files in the current directory and subfolders, inserting the selected path directly into your active command (e.g. type `nano ` and press `Ctrl+T`).",
                pt: "Busca interativamente arquivos no diretório atual e subpastas, inserindo o caminho selecionado diretamente no seu comando ativo (exemplo: digite `nano ` e pressione `Ctrl+T`)."
              }
            ],
            [
              { kind: "kbd", value: "Alt + C" },
              {
                es: "Cambio Rápido de Directorio (cd)",
                en: "Quick Directory Change (cd)",
                pt: "Troca Rápida de Diretório (cd)"
              },
              {
                es: "Despliega una lista navegable de todas las carpetas del proyecto. Al seleccionar una y presionar `Enter`, navega (`cd`) automáticamente a ese directorio.",
                en: "Displays a navigable list of all project folders. Selecting one and pressing `Enter` automatically runs `cd` into that directory.",
                pt: "Exibe uma lista navegável de todas as pastas do projeto. Ao selecionar uma e pressionar `Enter`, navega (`cd`) automaticamente para esse diretório."
              }
            ],
            [
              { kind: "kbd", value: "** + TAB" },
              {
                es: "Autocompletado Difuso Contextual",
                en: "Contextual Fuzzy Auto-Completion",
                pt: "Autocompletar Difuso Contextual"
              },
              {
                es: "Dispara un menú difuso al escribir `**` seguido de `TAB`. Funciona con comandos como `cd **<TAB>`, `vim **<TAB>`, `ssh **<TAB>` (autocompleta hosts) o `kill -9 **<TAB>` (autocompleta procesos).",
                en: "Triggers a fuzzy menu when typing `**` followed by `TAB`. Works with commands like `cd **<TAB>`, `vim **<TAB>`, `ssh **<TAB>` (hosts), or `kill -9 **<TAB>` (processes).",
                pt: "Dispara um menu difuso ao digitar `**` seguido de `TAB`. Funciona com comandos como `cd **<TAB>`, `vim **<TAB>`, `ssh **<TAB>` (hosts) ou `kill -9 **<TAB>` (processos)."
              }
            ]
          ]
        },
        {
          type: "h3",
          text: {
            es: "3. Guía y referencia de alias de Eza",
            en: "3. Eza Aliases Guide & Reference",
            pt: "3. Guia e referência de aliases do Eza"
          }
        },
        {
          type: "p",
          text: {
            es: "Los alias incluidos en tu `~/.bashrc` sustituyen el antiguo `ls` con comandos rápidos y visuales:",
            en: "The aliases added to your `~/.bashrc` replace legacy `ls` with fast, visual commands:",
            pt: "Os aliases adicionados ao seu `~/.bashrc` substituem o antigo `ls` por comandos rápidos e visuais:"
          }
        },
        {
          type: "table",
          headers: [
            { es: "Alias", en: "Alias", pt: "Alias" },
            { es: "Comando nativo ejecutado", en: "Native Command Executed", pt: "Comando nativo executado" },
            { es: "Descripción de la salida", en: "Output Description", pt: "Descrição da saída" }
          ],
          rows: [
            [
              { kind: "code", value: "ls" },
              { kind: "code", value: "eza --icons" },
              {
                es: "Listado estándar en columnas con iconos temáticos según la extensión de cada archivo.",
                en: "Standard column listing with thematic icons based on each file extension.",
                pt: "Listagem padrão em colunas com ícones temáticos por extensão de arquivo."
              }
            ],
            [
              { kind: "code", value: "ll" },
              { kind: "code", value: "eza -la --icons --git" },
              {
                es: "Listado completo y detallado: permisos Unix, usuario, tamaño legible (KB/MB), archivos ocultos y columna de estado Git.",
                en: "Full detailed listing: Unix permissions, owner, human-readable size (KB/MB), hidden files, and Git status column.",
                pt: "Listagem completa e detalhada: permissões Unix, proprietário, tamanho legível (KB/MB), arquivos ocultos e coluna de Git."
              }
            ],
            [
              { kind: "code", value: "la" },
              { kind: "code", value: "eza -a --icons" },
              {
                es: "Listado compacto que muestra todos los archivos, incluyendo archivos y carpetas ocultas (`.dotfiles`).",
                en: "Compact listing showing all files, including hidden files and directories (`.dotfiles`).",
                pt: "Listagem compacta mostrando todos os arquivos, incluindo arquivos e pastas ocultas (`.dotfiles`)."
              }
            ],
            [
              { kind: "code", value: "l" },
              { kind: "code", value: "eza -l --icons" },
              {
                es: "Listado largo vertical con metadatos de archivos (sin mostrar archivos ocultos).",
                en: "Long vertical listing with file metadata (excluding hidden files).",
                pt: "Listagem longa vertical com metadados de arquivos (sem arquivos ocultos)."
              }
            ],
            [
              { kind: "code", value: "lt" },
              { kind: "code", value: "eza --tree --level=2 --icons" },
              {
                es: "Exploración en árbol jerárquico recursivo limitado a 2 niveles de profundidad para entender la estructura de proyectos.",
                en: "Recursive hierarchical tree exploration limited to 2 levels of depth to inspect project structures.",
                pt: "Exploração em árvore hierárquica recursiva limitada a 2 níveis de profundidade para entender estruturas de projetos."
              }
            ]
          ]
        },
        {
          type: "h3",
          text: {
            es: "4. Ubicación de archivos de configuración en el sistema",
            en: "4. Configuration files location on system",
            pt: "4. Localização dos arquivos de configuração no sistema"
          }
        },
        {
          type: "table",
          headers: [
            { es: "Ruta del archivo", en: "File Path", pt: "Caminho do arquivo" },
            { es: "Propósito y contenido", en: "Purpose & Content", pt: "Propósito e conteúdo" }
          ],
          rows: [
            [
              { kind: "code", value: "~/.bashrc" },
              {
                es: "Punto neurálgico de Bash. Carga Oh My Posh, los alias de Eza y el módulo FZF cada vez que abres la terminal.",
                en: "Central Bash script. Loads Oh My Posh, Eza aliases, and the FZF module each time the terminal opens.",
                pt: "Ponto nevrálgico do Bash. Carrega Oh My Posh, aliases do Eza e o módulo FZF cada vez que o terminal é aberto."
              }
            ],
            [
              { kind: "code", value: "~/.config/eza/theme.yml" },
              {
                es: "Definición del tema de color Kanagawa Wave para Eza (paleta de colores para permisos, directorios y tipos MIME).",
                en: "Kanagawa Wave color theme definition for Eza (color palette for permissions, directories, and MIME types).",
                pt: "Definição do tema de cores Kanagawa Wave para o Eza (paleta de cores para permissões, diretórios e tipos MIME)."
              }
            ],
            [
              { kind: "code", value: "~/.local/share/fonts/" },
              {
                es: "Directorio de fuentes del usuario donde se alojan los archivos `.ttf` de FiraCode Nerd Font.",
                en: "User fonts directory housing the FiraCode Nerd Font `.ttf` font files.",
                pt: "Diretório de fontes do usuário onde ficam os arquivos `.ttf` da FiraCode Nerd Font."
              }
            ],
            [
              { kind: "code", value: "~/.cache/oh-my-posh/themes/" },
              {
                es: "Repositorio local de temas de Oh My Posh que contiene el archivo `pure.omp.json` y los demás temas oficiales.",
                en: "Local Oh My Posh theme repository containing `pure.omp.json` and all official theme files.",
                pt: "Repositório local de temas do Oh My Posh contendo o arquivo `pure.omp.json` e os outros temas oficiais."
              }
            ]
          ]
        },
        {
          type: "callout",
          tone: "note",
          title: {
            es: "Consejo para tu flujo de trabajo:",
            en: "Workflow tip:",
            pt: "Dica para seu fluxo de trabalho:"
          },
          text: {
            es: "Si en algún momento agregas un nuevo alias o modificas el tema de Oh My Posh en `~/.bashrc`, ejecuta `source ~/.bashrc` para recargar los cambios inmediatamente sin cerrar la ventana.",
            en: "If you ever add a new alias or modify the Oh My Posh theme in `~/.bashrc`, run `source ~/.bashrc` to reload the changes instantly without closing the window.",
            pt: "Se em algum momento adicionar um novo alias ou modificar o tema do Oh My Posh no `~/.bashrc`, execute `source ~/.bashrc` para recarregar as alterações imediatamente sem fechar a janela."
          }
        }
      ]
    }
  ]
};

window.GUIDE_UI = {
  summary: {
    badge: {
      es: "RESUMEN",
      en: "SUMMARY",
      pt: "RESUMO"
    },
    chip: {
      es: "Guía de Referencia y Atajos",
      en: "Reference Guide & Shortcuts",
      pt: "Guia de Referência e Atalhos"
    }
  },

  brand: {
    name: "bash.terminal",
    badge: {
      es: "Guía de Configuración",
      en: "Configuration Guide",
      pt: "Guia de Configuração"
    }
  },

  toc: {
    title: {
      es: "Índice de pasos",
      en: "Table of steps",
      pt: "Índice de passos"
    },
    progress: function (done, total) {
      return {
        es: done + " de " + total + " completados",
        en: done + " of " + total + " completed",
        pt: done + " de " + total + " concluídos"
      };
    },
    markStep: {
      es: "Completado",
      en: "Done",
      pt: "Concluído"
    },
    resetProgress: {
      es: "Reiniciar progreso",
      en: "Reset progress",
      pt: "Reiniciar progresso"
    }
  },

  code: {
    copy: {
      es: "Copiar",
      en: "Copy",
      pt: "Copiar"
    },
    copied: {
      es: "¡Copiado!",
      en: "Copied!",
      pt: "Copiado!"
    }
  },

  lightbox: {
    title: {
      es: "Captura de la terminal",
      en: "Terminal screenshot",
      pt: "Captura do terminal"
    },
    close: {
      es: "Cerrar",
      en: "Close",
      pt: "Fechar"
    },
    zoomPrompt: {
      es: "Clic para ampliar",
      en: "Click to zoom",
      pt: "Clique para ampliar"
    }
  },

  footer: {
    tagline: {
      es: "Guía paso a paso para personalizar la terminal Bash en Ubuntu.",
      en: "Step-by-step guide to customizing the Ubuntu Bash terminal.",
      pt: "Guia passo a passo para personalizar o terminal Bash no Ubuntu."
    },
    copyright: {
      es: "© 2026 bash.terminal · Todos los derechos reservados.",
      en: "© 2026 bash.terminal · All rights reserved.",
      pt: "© 2026 bash.terminal · Todos os direitos reservados."
    },
    githubAria: {
      es: "Perfil de GitHub de jdswe (José Carranza)",
      en: "jdswe GitHub Profile (José Carranza)",
      pt: "Perfil do GitHub de jdswe (José Carranza)"
    },
    youtubeAria: {
      es: "Canal de YouTube Coding & Games por Jose Carranza",
      en: "Coding & Games YouTube Channel by Jose Carranza",
      pt: "Canal do YouTube Coding & Games por Jose Carranza"
    },
    backToTop: {
      es: "Volver arriba ↑",
      en: "Back to top ↑",
      pt: "Voltar ao topo ↑"
    }
  }
};
/* ==========================================================================
   bash.terminal — Aplicación de la Guía de Configuración
   Vanilla JavaScript, sin dependencias. Totalmente funcional offline.
   ========================================================================== */

(function () {
  "use strict";

  const GUIDE = window.GUIDE_CONTENT;
  const UI = window.GUIDE_UI;

  if (!GUIDE || !UI) {
    console.error("bash.terminal: Guide content not found.");
    return;
  }

  const SECTIONS = GUIDE.sections;
  const STEPS = SECTIONS.filter(function (s) { return s.isStep !== false; });
  const TOTAL = STEPS.length;
  const STORAGE_KEY = "bashguide.";

  /* ------------------------------------------------------------------------
     Estado de la aplicación
     ------------------------------------------------------------------------ */

  const state = {
    lang: "es",
    theme: "dark",
    sound: false,
    completed: new Set(),
    activeSection: "paso-1"
  };

  const codeRegistry = new Map();
  let codeCounter = 0;
  let toastTimer = null;
  let drawerOpen = false;

  /* ------------------------------------------------------------------------
     Elementos del DOM
     ------------------------------------------------------------------------ */

  const guideSectionsEl = document.getElementById("guide-sections");
  const tocNavEl = document.getElementById("toc-nav");
  const tocCountEl = document.getElementById("toc-count");
  const tocTitleEl = document.getElementById("toc-title");
  const tocToggleBtn = document.getElementById("toc-toggle");
  const tocToggleLabel = document.getElementById("toc-toggle-label");
  const sidebarEl = document.getElementById("guide-toc");
  const overlayEl = document.getElementById("drawer-overlay");
  const headerProgressFill = document.getElementById("header-progress-fill");
  const headerProgressText = document.getElementById("header-progress-text");
  const resetProgressBtn = document.getElementById("reset-progress-btn");
  const themeToggleBtn = document.getElementById("theme-toggle");
  const soundToggleBtn = document.getElementById("sound-toggle");

  const heroTitleEl = document.getElementById("guide-hero-title");
  const heroLeadEl = document.getElementById("guide-hero-lead");
  const heroCaptionEl = document.getElementById("guide-hero-caption");
  const brandBadgeEl = document.getElementById("brand-badge");

  const footerTaglineEl = document.getElementById("footer-tagline");
  const footerCopyrightEl = document.getElementById("footer-copyright");
  const backToTopLink = document.getElementById("back-to-top");

  const lightboxDialog = document.getElementById("lightbox-dialog");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxClose = document.getElementById("lightbox-close");

  const toastEl = document.getElementById("toast");
  const toastTextEl = document.getElementById("toast-text");

  /* ------------------------------------------------------------------------
     Iconos SVG
     ------------------------------------------------------------------------ */

  const ICONS = {
    check: '<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3.2 3.2L13 4.8"/></svg>',
    copy: '<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="5.5" y="5.5" width="8" height="8" rx="1.2"/><path d="M10.5 5.5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2"/></svg>',
    terminal: '<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="1.8" y="3" width="12.4" height="10" rx="1.4"/><path d="M4.4 6.5l2 1.7-2 1.7M8.4 10h3"/></svg>',
    external: '<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h7v7M13 3L7 9M3 6v7h7"/></svg>',
    zoom: '<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5l3.5 3.5M7 5v4M5 7h4"/></svg>'
  };

  /* ------------------------------------------------------------------------
     Utilidades
     ------------------------------------------------------------------------ */

  const ESCAPE_MAP = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };

  function escapeHtml(val) {
    return String(val).replace(/[&<>"']/g, function (char) {
      return ESCAPE_MAP[char];
    });
  }

  function inline(val) {
    if (!val) return "";
    return escapeHtml(val)
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  }

  function isLocalized(val) {
    return (
      val !== null &&
      typeof val === "object" &&
      !Array.isArray(val) &&
      ("es" in val || "en" in val || "pt" in val)
    );
  }

  function t(val) {
    if (isLocalized(val)) {
      return val[state.lang] !== undefined ? val[state.lang] : val.es;
    }
    return val || "";
  }

  function storageGet(key, fallback) {
    try {
      const v = window.localStorage.getItem(STORAGE_KEY + key);
      return v === null ? fallback : v;
    } catch (e) {
      return fallback;
    }
  }

  function storageSet(key, value) {
    try {
      window.localStorage.setItem(STORAGE_KEY + key, value);
    } catch (e) {
      /* ignore */
    }
  }

  /* ------------------------------------------------------------------------
     Resaltado de sintaxis básico para Bash
     ------------------------------------------------------------------------ */

  const TOKEN_SOURCE =
    '("(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\')' +
    '|(\\$\\{?[A-Za-z_][A-Za-z0-9_]*\\}?|\\$\\([^)\\n]*\\))' +
    '|(\\B--?[A-Za-z0-9][A-Za-z0-9=_-]*)' +
    '|(\\b(?:sudo|apt|curl|wget|echo|chmod|chown|mkdir|rm|cp|mv|nano|vim|source|eval|export|alias|if|then|else|fi|for|do|done|command|grep|fc-cache|fc-list|oh-my-posh|eza|fzf|gpg|tee|install|update|upgrade|font|ls|cat|head|tail|git)\\b)';

  function highlightLine(line) {
    if (!line) return "";
    if (/^\s*#/.test(line)) {
      return '<span class="tok-comment">' + escapeHtml(line) + "</span>";
    }

    const tokenPattern = new RegExp(TOKEN_SOURCE, "g");
    let result = "";
    let lastIndex = 0;
    let match;

    while ((match = tokenPattern.exec(line)) !== null) {
      result += escapeHtml(line.slice(lastIndex, match.index));

      let tokenClass = "tok-cmd";
      if (match[1] !== undefined) tokenClass = "tok-string";
      else if (match[2] !== undefined) tokenClass = "tok-var";
      else if (match[3] !== undefined) tokenClass = "tok-flag";

      result += '<span class="' + tokenClass + '">' + escapeHtml(match[0]) + "</span>";
      lastIndex = match.index + match[0].length;
    }

    result += escapeHtml(line.slice(lastIndex));
    return result;
  }

  function renderCodeBlock(code, kind) {
    const id = "code-" + ++codeCounter;
    codeRegistry.set(id, code);
    const language = kind === "powershell" ? "powershell" : "bash";

    const lines = code.split("\n");
    const codeHtml = lines
      .map(function (line) {
        return (
          '<span class="code-line">' +
          '<span class="code-text">' +
          (line ? highlightLine(line) : "&nbsp;") +
          "</span></span>"
        );
      })
      .join("");

    return (
      '<div class="code-panel">' +
      '<div class="code-panel__bar">' +
      '<span class="code-panel__label">' +
      ICONS.terminal +
      "<span>" +
      language +
      "</span></span>" +
      '<button type="button" class="copy-btn" data-copy-id="' +
      id +
      '">' +
      ICONS.copy +
      '<span class="copy-btn__text">' +
      t(UI.code.copy) +
      "</span></button>" +
      "</div>" +
      '<pre class="code-panel__pre"><code>' +
      codeHtml +
      "</code></pre></div>"
    );
  }

  function renderTable(block) {
    const headers = block.headers
      .map(function (h) {
        return '<th scope="col">' + inline(t(h)) + "</th>";
      })
      .join("");

    const rows = block.rows
      .map(function (row) {
        const cells = row
          .map(function (cell) {
            if (cell && typeof cell === "object" && !isLocalized(cell)) {
              if (cell.kind === "kbd") {
                return '<td><kbd class="kbd-badge">' + escapeHtml(cell.value) + "</kbd></td>";
              }
              if (cell.kind === "code") {
                return '<td><code class="inline-code">' + escapeHtml(cell.value) + "</code></td>";
              }
            }
            return "<td>" + inline(t(cell)) + "</td>";
          })
          .join("");
        return "<tr>" + cells + "</tr>";
      })
      .join("");

    return (
      '<div class="table-responsive"><table><thead><tr>' +
      headers +
      "</tr></thead><tbody>" +
      rows +
      "</tbody></table></div>"
    );
  }

  function renderFigure(imageObj) {
    const src = escapeHtml(imageObj.src);
    const alt = escapeHtml(t(imageObj.alt) || "");
    const caption = inline(t(imageObj.caption) || "");

    return (
      '<figure class="guide-figure">' +
      '<div class="terminal-frame">' +
      '<div class="terminal-frame__bar">' +
      '<span class="terminal-frame__dots" aria-hidden="true"><i></i><i></i><i></i></span>' +
      '<span class="terminal-frame__title">' +
      alt +
      "</span>" +
      '<button type="button" class="zoom-icon-btn" data-zoom-src="' +
      src +
      '" data-zoom-alt="' +
      alt +
      '" aria-label="' +
      t(UI.lightbox.zoomPrompt) +
      '">' +
      ICONS.zoom +
      "</button>" +
      "</div>" +
      '<button type="button" class="terminal-frame__btn" data-zoom-src="' +
      src +
      '" data-zoom-alt="' +
      alt +
      '">' +
      '<img src="' +
      src +
      '" alt="' +
      alt +
      '" class="terminal-frame__img" decoding="async">' +
      '<span class="terminal-frame__zoom-overlay">' +
      ICONS.zoom +
      " " +
      t(UI.lightbox.zoomPrompt) +
      "</span>" +
      "</button>" +
      "</div>" +
      (caption ? '<figcaption class="guide-figure__caption">' + caption + "</figcaption>" : "") +
      "</figure>"
    );
  }

  function renderBlock(block) {
    switch (block.type) {
      case "p":
        return '<p class="guide-p">' + inline(t(block.text)) + "</p>";

      case "h3":
        return '<h3 class="guide-h3">' + inline(t(block.text)) + "</h3>";

      case "code":
        return renderCodeBlock(block.code, block.kind);

      case "image":
        return renderFigure(block);

      case "step_item": {
        let imgHtml = block.image ? renderFigure(block.image) : "";
        return (
          '<div class="guide-step-item">' +
          '<div class="guide-step-item__header">' +
          '<span class="guide-step-item__badge">' +
          block.number +
          "</span>" +
          '<div class="guide-step-item__desc">' +
          inline(t(block.text)) +
          "</div>" +
          "</div>" +
          imgHtml +
          "</div>"
        );
      }

      case "steps_list": {
        const lis = block.items
          .map(function (it, idx) {
            return (
              '<li class="guide-steps-list__item">' +
              '<span class="guide-steps-list__num">' +
              (idx + 1) +
              ".</span> " +
              '<span>' +
              inline(t(it)) +
              "</span></li>"
            );
          })
          .join("");
        return '<ol class="guide-steps-list">' + lis + "</ol>";
      }

      case "note":
        return '<p class="guide-note">' + inline(t(block.text)) + "</p>";

      case "callout": {
        const title = t(block.title) || "";
        return (
          '<aside class="guide-callout guide-callout--' +
          (block.tone || "note") +
          '">' +
          (title ? '<p class="guide-callout__title">' + inline(title) + "</p>" : "") +
          '<p class="guide-callout__body">' +
          inline(t(block.text)) +
          "</p>" +
          "</aside>"
        );
      }

      case "link_box": {
        const label = t(block.label) || "Sitio Web Oficial:";
        return (
          '<div class="guide-link-box">' +
          '<span class="guide-link-box__label"><strong>' +
          escapeHtml(label) +
          "</strong></span> " +
          '<a href="' +
          block.url +
          '" target="_blank" rel="noopener noreferrer" class="guide-link-box__link">' +
          escapeHtml(block.url) +
          " " +
          ICONS.external +
          "</a>" +
          "</div>"
        );
      }

      case "table":
        return renderTable(block);

      default:
        return "";
    }
  }

  /* ------------------------------------------------------------------------
     Renderizado de la Guía Completa
     ------------------------------------------------------------------------ */

  function renderGuide() {
    if (!guideSectionsEl) return;

    // Header y Hero
    if (heroTitleEl) heroTitleEl.textContent = t(GUIDE.header.title);
    if (heroLeadEl) heroLeadEl.textContent = t(GUIDE.header.subtitle);
    if (heroCaptionEl) heroCaptionEl.textContent = t(GUIDE.header.heroImage.caption);
    if (brandBadgeEl) brandBadgeEl.textContent = t(UI.brand.badge);

    // Footer
    if (footerTaglineEl) footerTaglineEl.textContent = t(UI.footer.tagline);
    if (footerCopyrightEl) footerCopyrightEl.textContent = t(UI.footer.copyright);
    if (backToTopLink) backToTopLink.textContent = t(UI.footer.backToTop);

    // Sidebar
    if (tocTitleEl) tocTitleEl.textContent = t(UI.toc.title);
    if (tocCountEl) tocCountEl.textContent = TOTAL + " " + (state.lang === "es" ? "pasos" : state.lang === "pt" ? "passos" : "steps");
    if (resetProgressBtn) resetProgressBtn.textContent = t(UI.toc.resetProgress);

    // Sections
    let stepCounter = 0;
    const sectionsHtml = SECTIONS.map(function (section) {
      const isStep = section.isStep !== false;
      const isDone = state.completed.has(section.id);
      const title = t(section.title);
      let stepNum = "";
      if (isStep) {
        stepCounter++;
        stepNum = String(stepCounter).padStart(2, "0");
      }
      const leadHtml = section.lead ? '<p class="guide-p guide-p--lead">' + inline(t(section.lead)) + "</p>" : "";
      const blocksHtml = section.blocks.map(renderBlock).join("");

      const badgeHtml = isStep
        ? '<span class="guide-section__badge">STEP ' + stepNum + "</span>"
        : '<span class="guide-section__badge guide-section__badge--summary">⚡ ' + t(section.badge || UI.summary.badge) + "</span>";

      const actionHtml = isStep
        ? '<button type="button" class="step-toggle-btn' +
          (isDone ? " is-done" : "") +
          '" data-toggle-step="' +
          section.id +
          '" aria-pressed="' +
          String(isDone) +
          '">' +
          ICONS.check +
          "<span>" +
          t(UI.toc.markStep) +
          "</span></button>"
        : '<span class="guide-section__ref-chip">' + t(section.chip || UI.summary.chip) + "</span>";

      return (
        '<section class="guide-section' +
        (isStep ? "" : " guide-section--summary") +
        (isDone ? " is-completed" : "") +
        '" id="' +
        section.id +
        '" data-section-id="' +
        section.id +
        '">' +
        '<header class="guide-section__header">' +
        '<div class="guide-section__title-wrap">' +
        badgeHtml +
        '<h2 class="guide-section__title">' +
        escapeHtml(title) +
        "</h2>" +
        "</div>" +
        actionHtml +
        "</header>" +
        leadHtml +
        '<div class="guide-section__body">' +
        blocksHtml +
        "</div>" +
        "</section>"
      );
    }).join("");

    guideSectionsEl.innerHTML = sectionsHtml;

    renderToc();
    updateProgress();
  }

  function renderToc() {
    if (!tocNavEl) return;

    let tocStepCounter = 0;
    const tocHtml = SECTIONS.map(function (section) {
      const isStep = section.isStep !== false;
      const isDone = state.completed.has(section.id);
      const isActive = section.id === state.activeSection;
      const title = t(section.title);
      let idxHtml = "";
      if (isStep) {
        tocStepCounter++;
        idxHtml = String(tocStepCounter).padStart(2, "0");
      } else {
        idxHtml = "⚡";
      }

      return (
        '<a href="#' +
        section.id +
        '" class="guide-toc-link' +
        (isActive ? " is-active" : "") +
        (isDone ? " is-done" : "") +
        (!isStep ? " guide-toc-link--summary" : "") +
        '" data-section-link="' +
        section.id +
        '">' +
        '<span class="guide-toc-link__idx' + (!isStep ? " guide-toc-link__idx--summary" : "") + '">' +
        idxHtml +
        "</span>" +
        '<span class="guide-toc-link__text">' +
        escapeHtml(title) +
        "</span>" +
        '<span class="guide-toc-link__status">' +
        (isStep ? (isDone ? ICONS.check : '<span class="guide-toc-link__dot"></span>') : "") +
        "</span>" +
        "</a>"
      );
    }).join("");

    tocNavEl.innerHTML = tocHtml;
  }

  /* ------------------------------------------------------------------------
     Progreso y almacenamiento
     ------------------------------------------------------------------------ */

  function updateProgress() {
    const done = Array.from(state.completed).filter(function (id) {
      return STEPS.some(function (s) { return s.id === id; });
    }).length;
    const pct = TOTAL ? Math.round((done / TOTAL) * 100) : 0;

    if (headerProgressFill) headerProgressFill.style.width = pct + "%";
    if (headerProgressText) {
      const fn = UI.toc.progress;
      headerProgressText.textContent = fn(done, TOTAL)[state.lang] || done + " / " + TOTAL;
    }
  }

  function toggleSectionCompletion(sectionId) {
    if (state.completed.has(sectionId)) {
      state.completed.delete(sectionId);
    } else {
      state.completed.add(sectionId);
      showToast(state.lang === "es" ? "Paso marcado como completado" : state.lang === "pt" ? "Passo marcado como concluído" : "Step marked as done");
    }

    storageSet("completed", JSON.stringify(Array.from(state.completed)));
    renderGuide();
  }

  function resetProgress() {
    state.completed.clear();
    storageSet("completed", "[]");
    renderGuide();
    showToast(state.lang === "es" ? "Progreso reiniciado" : state.lang === "pt" ? "Progresso reiniciado" : "Progress reset");
  }

  /* ------------------------------------------------------------------------
     Copiado al portapapeles
     ------------------------------------------------------------------------ */

  function copyCode(id, button) {
    const code = codeRegistry.get(id);
    if (!code) return;

    function onSuccess() {
      button.classList.add("is-copied");
      const label = button.querySelector(".copy-btn__text");
      if (label) label.textContent = t(UI.code.copied);

      setTimeout(function () {
        button.classList.remove("is-copied");
        if (label) label.textContent = t(UI.code.copy);
      }, 2000);

      showToast(state.lang === "es" ? "Comando copiado al portapapeles" : state.lang === "pt" ? "Comando copiado para a área de transferência" : "Command copied to clipboard");
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(onSuccess).catch(function () {
        fallbackCopy(code, onSuccess);
      });
    } else {
      fallbackCopy(code, onSuccess);
    }
  }

  function fallbackCopy(text, callback) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      if (callback) callback();
    } catch (e) {
      console.warn("Copy fallback failed", e);
    }
    document.body.removeChild(textarea);
  }

  /* ------------------------------------------------------------------------
     Notificación Toast
     ------------------------------------------------------------------------ */

  function showToast(msg) {
    if (!toastEl || !toastTextEl) return;
    toastTextEl.textContent = msg;
    toastEl.classList.add("is-active");

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("is-active");
    }, 2400);
  }

  /* ------------------------------------------------------------------------
     Visor Lightbox para imágenes
     ------------------------------------------------------------------------ */

  function openLightbox(src, alt) {
    if (!lightboxDialog || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    if (lightboxTitle) lightboxTitle.textContent = alt || t(UI.lightbox.title);

    if (typeof lightboxDialog.showModal === "function") {
      lightboxDialog.showModal();
    } else {
      lightboxDialog.setAttribute("open", "");
    }
  }

  function closeLightbox() {
    if (!lightboxDialog) return;
    if (typeof lightboxDialog.close === "function") {
      lightboxDialog.close();
    } else {
      lightboxDialog.removeAttribute("open");
    }
  }

  /* ------------------------------------------------------------------------
     Drawer / Menú móvil
     ------------------------------------------------------------------------ */

  function openDrawer() {
    if (!sidebarEl || !overlayEl) return;
    drawerOpen = true;
    sidebarEl.classList.add("is-open");
    overlayEl.hidden = false;
    if (tocToggleBtn) tocToggleBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (!sidebarEl || !overlayEl) return;
    drawerOpen = false;
    sidebarEl.classList.remove("is-open");
    overlayEl.hidden = true;
    if (tocToggleBtn) tocToggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  /* ------------------------------------------------------------------------
     Selector de Idioma
     ------------------------------------------------------------------------ */

  function setLanguage(lang) {
    if (lang !== "es" && lang !== "en" && lang !== "pt") return;
    state.lang = lang;
    storageSet("lang", lang);

    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-set-lang") === lang));
    });

    renderGuide();
  }

  /* ------------------------------------------------------------------------
     Selector de Tema (Modo Oscuro / Claro)
     ------------------------------------------------------------------------ */

  function applyTheme(theme) {
    if (!themeToggleBtn) return;
    const isDark = theme === "dark";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("color-scheme", theme);
    themeToggleBtn.setAttribute("aria-pressed", String(isDark));
    themeToggleBtn.setAttribute(
      "aria-label",
      isDark ? "Cambiar al modo claro" : "Cambiar al modo oscuro"
    );
    // Iconos: moon = oscuro activo, sun = claro activo
    const moonIcon = themeToggleBtn.querySelector(".theme-icon--moon");
    const sunIcon = themeToggleBtn.querySelector(".theme-icon--sun");
    if (moonIcon) moonIcon.style.display = isDark ? "block" : "none";
    if (sunIcon) sunIcon.style.display = isDark ? "none" : "block";
    storageSet("theme", theme);
  }

  function toggleTheme() {
    const next = state.theme === "dark" ? "light" : "dark";
    state.theme = next;
    applyTheme(next);
  }

  /* ------------------------------------------------------------------------
     Sonido de interfaz (clic suave)
     ------------------------------------------------------------------------ */

  var audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      audioCtx =
        new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
  }

  function playClick() {
    if (!state.sound) return;
    try {
      var ctx = getAudioContext();
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(900, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch (e) {
      /* silencioso si el navegador bloquea audio sin interacción */
    }
  }

  function applySound(sound) {
    if (!soundToggleBtn) return;
    state.sound = sound;
    soundToggleBtn.setAttribute("aria-pressed", String(sound));
    soundToggleBtn.setAttribute(
      "aria-label",
      sound
        ? "Sonidos activados (desactivar)"
        : "Sonidos desactivados (activar)"
    );
    const offIcon = soundToggleBtn.querySelector(".sound-icon--off");
    const onIcon = soundToggleBtn.querySelector(".sound-icon--on");
    if (offIcon) offIcon.style.display = sound ? "none" : "block";
    if (onIcon) onIcon.style.display = sound ? "block" : "none";
    storageSet("sound", sound ? "1" : "0");
  }

  function toggleSound() {
    var next = !state.sound;
    applySound(next);
    playClick();
  }

  /* ------------------------------------------------------------------------
     ScrollSpy para el índice
     ------------------------------------------------------------------------ */

  function setupScrollSpy() {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            state.activeSection = entry.target.id;
            updateActiveToc();
          }
        });
      },
      { rootMargin: "-15% 0px -75% 0px" }
    );

    SECTIONS.forEach(function (section) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
  }

  function updateActiveToc() {
    document.querySelectorAll("[data-section-link]").forEach(function (link) {
      const id = link.getAttribute("data-section-link");
      link.classList.toggle("is-active", id === state.activeSection);
    });
  }

  /* ------------------------------------------------------------------------
     Manejo de eventos
     ------------------------------------------------------------------------ */

  function bindEvents() {
    // Cambio de idioma
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.getAttribute("data-set-lang"));
      });
    });

    // Cambio de tema (oscuro / claro)
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", function () {
        toggleTheme();
      });
    }

    // Cambio de sonido (encender / apagar)
    if (soundToggleBtn) {
      soundToggleBtn.addEventListener("click", function () {
        toggleSound();
      });
    }

    // Delegación de eventos en el contenido (copiado, zoom, toggle de completado)
    document.addEventListener("click", function (e) {
      const copyBtn = e.target.closest(".copy-btn");
      if (copyBtn) {
        e.preventDefault();
        const id = copyBtn.getAttribute("data-copy-id");
        copyCode(id, copyBtn);
        return;
      }

      const toggleStepBtn = e.target.closest("[data-toggle-step]");
      if (toggleStepBtn) {
        e.preventDefault();
        const secId = toggleStepBtn.getAttribute("data-toggle-step");
        toggleSectionCompletion(secId);
        return;
      }

      const zoomTrigger = e.target.closest("[data-zoom-src]");
      if (zoomTrigger) {
        e.preventDefault();
        openLightbox(zoomTrigger.getAttribute("data-zoom-src"), zoomTrigger.getAttribute("data-zoom-alt"));
        return;
      }
    });

    // Cerrar lightbox
    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    if (lightboxDialog) {
      lightboxDialog.addEventListener("click", function (e) {
        if (e.target === lightboxDialog) closeLightbox();
      });
    }

    // Toggle menú móvil
    if (tocToggleBtn) {
      tocToggleBtn.addEventListener("click", function () {
        if (drawerOpen) closeDrawer();
        else openDrawer();
      });
    }
    if (overlayEl) overlayEl.addEventListener("click", closeDrawer);

    // Click en enlaces del TOC
    if (tocNavEl) {
      tocNavEl.addEventListener("click", function (e) {
        const link = e.target.closest("a");
        if (link && drawerOpen) {
          closeDrawer();
        }
      });
    }

    // Reinicio de progreso (sin alertas bloqueantes del navegador)
    if (resetProgressBtn) {
      resetProgressBtn.addEventListener("click", function () {
        resetProgress();
      });
    }

    // Teclado
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (drawerOpen) closeDrawer();
        closeLightbox();
      }
    });
  }

  /* ------------------------------------------------------------------------
     Inicialización
     ------------------------------------------------------------------------ */

  function init() {
    const savedLang = storageGet("lang", "es");
    if (savedLang === "es" || savedLang === "en" || savedLang === "pt") {
      state.lang = savedLang;
    }

    try {
      const savedCompleted = JSON.parse(storageGet("completed", "[]"));
      if (Array.isArray(savedCompleted)) {
        state.completed = new Set(savedCompleted);
      }
    } catch (e) {
      state.completed = new Set();
    }

    document.documentElement.lang = state.lang;
    document.documentElement.setAttribute("data-lang", state.lang);

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-set-lang") === state.lang));
    });

    // Cargar tema guardado
    const savedTheme = storageGet("theme", "dark");
    if (savedTheme === "dark" || savedTheme === "light") {
      state.theme = savedTheme;
    }
    applyTheme(state.theme);

    // Cargar preferencia de sonido
    const savedSound = storageGet("sound", "0");
    applySound(savedSound === "1");

    renderGuide();
    bindEvents();
    setupScrollSpy();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
