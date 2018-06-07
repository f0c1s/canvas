const canvases = []
const getBrowserWidth = () => Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
const getBrowserHeight = () => Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
const getBrowserDimensions = () => { return { height: getBrowserHeight(), width: getBrowserWidth() } }
const getCanvasDimensions = () => {
    const dimensions = getBrowserDimensions()
    return {
        height: dimensions.height - BOTH_SIDE_GUTTER,
        width: dimensions.width - BOTH_SIDE_GUTTER
    }
}
const addNewCanvas = canvas => {
    CONTAINER.appendChild(canvas)
    canvases.push(canvas)
}

const setElementPosition = element => position => {
    element.style.position = position
    return positions => {
        const { top, right, bottom, left } = positions
        element.style.top = top
        element.style.left = left
        element.style.right = right
        element.style.bottom = bottom
        return element
    }
}

const setCanvasBorder = (canvas, borderValue) => {
    canvas.style.border = borderValue
    return canvas
}

const stackCanvasVertically = canvas => {
    canvas.style.zIndex = canvases.length
    return canvas
}

const setCanvasDimensions = canvas => {
    const dimensions = getCanvasDimensions()
    canvas.height = dimensions.height
    canvas.width = dimensions.width
    setCanvasBorder(canvas, 'thin solid #ddd')
    return canvas
}

const createCanvas = (positions) => {
    const canvas = document.createElement('canvas')
    canvas.class = 'canvas'
    canvas.style.margin = 'auto'
    setCanvasDimensions(canvas)
    setElementPosition(canvas)('relative')(positions)
    stackCanvasVertically(canvas)
    return canvas
}

const setupCanvas = () => {
    const positions = {
        top: GUTTER ? `${GUTTER}px` : '0',
        right: undefined,
        bottom: undefined,
        left: GUTTER ? `${GUTTER}px` : '0'
    }
    const canvas = createCanvas(positions)
    addNewCanvas(canvas)
    return canvas
}

const getContext = canvas => canvas.getContext('2d')
