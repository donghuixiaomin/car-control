radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Microbit.Servo4(Microbit.enServo.S1, 200)
    } else if (receivedNumber == 2) {
        Microbit.Servo4(Microbit.enServo.S1, 110)
    } else {
        Microbit.Servo4(Microbit.enServo.S1, 155)
        Microbit.MotorRun(Microbit.enMotors.M4, 80)
    }
})
/**
 * 什么都不按机器人前进
 * 
 * 通过AB按键控制方向
 * 
 * 按键A按下发送1
 * 
 * 按键B按下发送2
 */
input.onButtonPressed(Button.A, function () {
	
})
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
        basic.pause(500)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
        basic.pause(500)
    } else {
        radio.sendNumber(0)
    }
})
