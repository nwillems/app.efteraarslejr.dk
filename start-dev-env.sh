#!/bin/bash

echo "To start dev server: npm run dev"

docker run -it --rm -p 3000:3000 -v ${PWD}:/app node /bin/bash
