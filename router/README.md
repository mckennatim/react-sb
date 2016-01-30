    npm init
    npm install --save react react-router react-dom    
    npm install --save webpack

    mkdir dist

create dist/index.html   

    <!DOCTYPE html>
    <html>
    <body>
      <div id="app"></div>
      <script src="bundle.js"></script>
    </body>
    </html>  


add tooling for jsx

    npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react

create webpack.config.js


