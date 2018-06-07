const API = {
    drawLineSegmentFromLastPoint(options) {
        const { context, lastPoint, currentPoint, width } = options
        context.beginPath()
        context.moveTo(lastPoint.X, lastPoint.Y)
        context.lineTo(currentPoint.X, currentPoint.Y)
        context.lineWidth = width
        context.strokeStyle = 'black'
        context.stroke()
    }
}
