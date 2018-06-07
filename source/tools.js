const freeHandGlide = canvas => {
    return {
        start() {
            let lastPoint = null

            canvas.addEventListener('mousemove', e => {
                const rect = canvas.getBoundingClientRect()
                const X = e.clientX - rect.left
                const Y = e.clientY - rect.top
                lastPoint = lastPoint || { X, Y }
                let currentPoint = { X, Y }
                const context = getContext(canvas)
                API.drawLineSegmentFromLastPoint({ context, lastPoint, currentPoint, width: DEFAULT_LINE_WIDTH })
                lastPoint = currentPoint
            })
        }
    }
}
