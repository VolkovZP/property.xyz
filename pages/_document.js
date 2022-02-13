import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class XYZDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head />
                <body>
                    <Main />
                    <div id='portal'></div>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default XYZDocument
