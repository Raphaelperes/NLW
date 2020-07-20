NLW - Sistema de e-coleta de resíduos
================

Alicativo Node Express + Nunjucks

[Express] (http://expressjs.com).
[Nunjucks] (http://mozilla.github.io/nunjucks/).

Instruções de instalação (para RHEL / CentOS):

Instale o Node + Express:

`curl -sL https://rpm.nodesource.com/setup | bash -`

`yum install -y nodejs`

`npm install -g express-generator`

Instale o git:

`yum install -y git`

Clone este repositório (criará automaticamente uma subpasta chamada "express-nunjucks":

`git clone https: // github.com / ababra / express-nunjucks.git`

Instale as dependências necessárias (faça isso dentro da pasta express-nunjucks):

`npm install`

Para iniciar o aplicativo:

`DEBUG = express-nunjucks PORT = 3000. / Bin / www`

Abra um navegador e navegue para http: // hostname-or-IP: 3000