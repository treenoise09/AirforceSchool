// PDFViewer.js

import React, { useRef, useEffect } from 'react';
import pdfjs from 'pdfjs-dist/webpack';

const PDFViewer = ({ src }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const loadingTask = pdfjs.getDocument(src);
        loadingTask.promise.then(pdf => {
            console.log('PDF loaded');

            // Fetch the first page
            const pageNumber = 1;
            pdf.getPage(pageNumber).then(page => {
                console.log('Page loaded');

                const scale = 1.5;
                const viewport = page.getViewport({ scale });

                // Prepare canvas using PDF page dimensions
                const canvas = canvasRef.current;
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render PDF page into canvas context
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                };
                const renderTask = page.render(renderContext);
                renderTask.promise.then(() => {
                    console.log('Page rendered');
                });
            });
        });
    }, [src]);

    return <canvas ref={canvasRef}></canvas>;
}

export default PDFViewer;
