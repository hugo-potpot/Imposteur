# Mettre en production

### Faire un build
```shell
yarn build
```

### Supprimer les fichiers existants du serveur
```shell
sudo rm -rf /var/www/imposteur/*
```

### Ajouter le dist sur le serveur
```shell
sudo mv dist/* /var/www/imposteur/
```

### Mettre les droits sur le dossier
```shell
sudo chown -R www-data:www-data /var/www/imposteur/
```
