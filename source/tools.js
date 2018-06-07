const freeHandGlide = canvas => {
    return {
        start() {
            let lastPoint = null

            canvas.addEventListener('mousemove', e => {
                const X = e.clientX
                const Y = e.clientY
                lastPoint = lastPoint || { X, Y }
                let currentPoint = { X, Y }
                const context = getContext(canvas)
                API.drawLineSegmentFromLastPoint({ context, lastPoint, currentPoint, width: DEFAULT_LINE_WIDTH })
                lastPoint = currentPoint
            })
        }
    }
}


