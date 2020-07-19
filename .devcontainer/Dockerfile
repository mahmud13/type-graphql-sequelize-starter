FROM node:14

RUN apt-get update \
  && apt-get -y install git zsh bash curl rsync vim locales \
  && echo "LC_ALL=en_US.UTF-8" | tee -a /etc/environment \
  && echo "en_US.UTF-8 UTF-8" | tee -a /etc/locale.gen \
  && echo "LANG=en_US.UTF-8" | tee -a /etc/locale.conf \
  && locale-gen en_US.UTF-8



RUN git clone https://github.com/holygeek/git-number.git /root/git-number

RUN cp /root/git-number/git-number /usr/local/bin/git-number \
  && cp /root/git-number/git-id /usr/local/bin/git-id \
  && cp /root/git-number/git-list /usr/local/bin/git-list \
  && rm -rf /root/git-number

USER node
ENV HISTFILE /home/node/.hist/.zsh_history
RUN mkdir -p /home/node/app && mkdir -p /home/node/.hist
WORKDIR /home/node/app

RUN mkdir /home/node/.npm-global
RUN npm config set prefix "/home/node/.npm-global"
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NODE_ENV=development

RUN npm install typescript typeorm --global

COPY package*.json ./

RUN npm install
COPY --chown=node:node . .
EXPOSE 9000
CMD nexus start