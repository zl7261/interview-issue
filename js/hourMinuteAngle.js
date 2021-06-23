function angleClock(hour, minutes) {

    let one_min_angle = 360 / 60
    let one_hour_angle = 360 / 12

    let minutes_angle = one_min_angle * minutes
    let hour_angle = (hour % 12 + minutes / 60) * one_hour_angle

    let diff = Math.abs(hour_angle - minutes_angle)
    return Math.min(diff, 360 - diff)
}

console.log(angleClock(15, 15));
