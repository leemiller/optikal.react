export const LocationOfPointAt = (angle, radius, xOffset = 0, yOffset = 0) => {
    const radians = angle * Math.PI / 180
    return {
        x: radius * Math.cos(radians) + xOffset,
        y: radius * Math.sin(radians) + yOffset
    }
}

export const CenterTextOffset = ref => {
    if (ref === null) {
        return
    }
    ref.setOffset({x: ref.getWidth() / 2, y: ref.getHeight() / 2})
}
