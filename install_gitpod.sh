#!/bin/bash
rm -f /tmp/install.sh
curl -s -o /tmp/install.sh  https://raw.githubusercontent.com/threefoldfoundation/data_threefold/development/install.sh
bash /tmp/install.sh
bash /workspace/data_threefold/gitpod_scripts/install.sh
bash /workspace/data_threefold/gitpod_scripts/run.sh

