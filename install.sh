paru -Syyuu base-devel
paru -S opera opera-ffmpeg-codecs bluez bluez-utils
paru -S alacritty fish lolcat ark wget
paru -S pulseaudio pulseaudio-bluetooth
paru -S sweet-kde-theme-git sweet-kvantum-theme-git sweet-gtk-theme-dark
paru -S ttf-iosevka-nerd noto-fonts noto-fonts-emoji-apple
paru -S blueman visual-studio-code-bin flameshot
paru -S sddm-sugar-candy-git gvfs gvfs-gphotos2
paru -S pcmanfm qt5ct kvantum sddm grub-customizer
paru -R lightdm lightdm-gtk-greeter
systemctl disable lightdm
systemctl enable sddm
systemctl enable bluetooth
git config --global user.email "pranjal3211p@gmail.com"
git config --global user.name "BIGBEASTiSHANK"
ssh-keygen
sudo mkdir /usr/share/fonts/TTF/
sudo cp ./fonts/* /usr/share/fonts/TTF
sudo cp ./sddm/sddm.conf /etc/
sudo cp ./environment/environment /etc/
sudo python ./grub/theme/install.py
cp -r ./config/* ~/.config/
chmod +x ~/.config/bspwm/*
chmod +x ~/.config/polybar/*
chmod +x ~/.config/polybar/shapes/*

reboot
