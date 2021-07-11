

FROM gitpod/workspace-full:latest

USER root
RUN apt-get update && apt-get install -y mc rsync 

#prepare for gitpod nodejs env
RUN rm -f /tmp/install_docker.sh && curl -s -o /tmp/install_docker.sh https://raw.githubusercontent.com/threefoldfoundation/data_threefold/development/gitpod_scripts/install_docker.sh && bash /tmp/install_docker.sh

# RUN apt-get clean && rm -rf /var/cache/apt/* && rm -rf /var/lib/apt/lists/* && rm -rf /tmp/*

USER gitpod

# ENTRYPOINT [ "/usr/bin/bash" ]
