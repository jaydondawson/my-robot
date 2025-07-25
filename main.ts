# Set up PWM on pin0
servo = machine.PWM(machine.Pin(0))
servo.freq(50)

def set_angle(angle):
    # Convert 0 - 180° to duty cycle for SG90
    duty = int((angle / 180 * 102) + 26)
    servo.duty(duty)

# Move servo to 90° on start
set_angle(90)

while True:
    display.set_pixel(2, 2, 9)  # Turn LED on
sleep(500)
display.set_pixel(2, 2, 0)  # Turn LED off
sleep(500)

if button_a.is_pressed():
    set_angle(0)
sleep(500)
elif button_b.is_pressed():
set_angle(90)
sleep(500)
