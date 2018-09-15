cd webui
npm install

ng build ==prod --aot=true

cd ..

mvn clean install

java -jar ./target/app-1.0.0.jar
