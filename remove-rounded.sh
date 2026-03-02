#!/bin/bash
# Script to remove all rounded classes from TypeScript files

sed -i 's/ rounded-full//g' /src/app/pages/*.tsx
sed -i 's/ rounded-lg//g' /src/app/pages/*.tsx
sed -i 's/ rounded-md//g' /src/app/pages/*.tsx
sed -i 's/ rounded-sm//g' /src/app/pages/*.tsx
sed -i 's/ rounded-xl//g' /src/app/pages/*.tsx
sed -i 's/ rounded-xs//g' /src/app/pages/*.tsx
sed -i 's/ rounded//g' /src/app/pages/*.tsx

sed -i 's/ rounded-full//g' /src/app/components/*.tsx
sed -i 's/ rounded-lg//g' /src/app/components/*.tsx
sed -i 's/ rounded-md//g' /src/app/components/*.tsx
sed -i 's/ rounded-sm//g' /src/app/components/*.tsx
sed -i 's/ rounded-xl//g' /src/app/components/*.tsx
sed -i 's/ rounded-xs//g' /src/app/components/*.tsx
sed -i 's/ rounded//g' /src/app/components/*.tsx

echo "Removed all rounded classes"
