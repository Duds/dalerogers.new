---
layout: default
title: "Designing a Quality Solution to an Airbag Problem Using Poka-Yoke"
author: Dale Rogers
category: work
date: 2018-07-12
tags: [Industrial design, Kaizen, Poka yoke, Process design, Systems engineering, Workshop facilitation]
excerpt: "A vehicle manufacturer was having quality issues with installing airbags. This problem led to the development of a whole new class of smart drill driver."
image: /assets/images/case-study1.jpg
---

## Challenge

Poka-yoke is a Japanese term (poka: mistakes; yokeru: avoid) that means to mistake-proof a process. Poka-yoke is an essential element of the quality process at a vehicle assembly plant. Quality inspection stations exist that check for known quality issues, but it is always better to prevent mistakes from occurring than to check for them later.

One known issue in the vehicle assembly process was the installation of the airbag computer. The airbag computer is screwed to the vehicle firewall, a pressed steel part. Many of the fittings and fixtures are pressed into the part during manufacture including the airbag computer screw holes. Sometimes these small screw holes aren't formed completely.

Mostly this is not a problem because parts are screwed on using battery cordless torque drivers and self-tapping screws. But, the airbag computer needs to screw to the firewall with a precise torque to ensure its correct operation during a collision. A loose airbag computer might not operate the airbag at all or might operate during driving. Sometimes, due to an ill-formed screw hole, the torque driver used to install the airbag would 'torque-out' before the screw was driven completely home leading to a loose airbag computer.

![A firewall panel showing the fitting and fixture holes](/images/case-studies/firewall-panel.jpg)
*A firewall panel showing the fitting and fixture holes that are pressed into the part during manufacture.*

## Expertise provided

- Kaizen
- Poka yoke
- Industrial design
- Process design
- Systems engineering
- Workshop facilitation

## Outcome

I assembled a kaizen team to better understand the people performing this task. Together with the team, I understood the difficulty of installing the airbag computer. There were several considerations, the assembly operation was done by an operator lying upside-down on their back to reach the firewall, the torque driver needed to be held at a slight angle to avoid other parts, and both hands were needed to hold the part and the driver and the screws.

![Kaizen team working through the problem-solving process](/images/case-studies/kaizen-team.jpg)
*Kaizen team working through the process of empathizing, defining and ideating for problem-solving.*

We discovered that some operators had more success and fewer errors than others. And we learned that those operators used a "double-tap" technique when screwing the parts together. We learned several factors cause failed torque-out. Ill-formed screw holes, paint runs, swarf or loose material in the screw holes and screws not being driven in at a perpendicular angle.

### Define

The kaizen team established the following problem statement:

> As an assembly operator, I need to install parts with the correct torque in a short time so that it operates correctly, but my torque driver sometimes indicates that it is installed at the torque incorrectly making me feel uncertain that the task is performed correctly

We agreed that in the first instance assembly workers would adopt the 'double-tap' torque technique used by some of the team. But this was not an ideal long term solution due to the increased strain on workers' wrists and shoulders.

![Assembly line operators using exoskeletons](/images/case-studies/assembly-exoskeleton.jpg)
*Assembly line operators install car parts supported by exoskeleton to reduce repetitive strain injury.*

### Ideate

During an ideation session, some of the assembly workers were asked what needs to be true to feel confident that the airbag computer was installed correctly. They mentioned that they needed to know, not only that the screws had reached a precise torque but that the screws had also made a specific number of turns indicating it had been screwed home correctly. More experienced operators had developed a 'sense' for the time the screw was being screwed before torque-out, to detect a failed screw, but not all workers could detect the timing. All the workers were clear that an indication of the number of revolutions of the screw or the appropriate timing of a successful screw would help them have confidence that their task was successful. The workers thought an LED or buzzer indicating a successful screw would help.

### Prototype

To prototype this idea I took a torque driver to my workspace and disassembled it to understand exactly how the torque driver worked. I noticed that there was some space inside the handle to install additional equipment. And I began to think about how the torque driver might include an additional sensor to count rotations and detect torque-out.

![Cordless torque driver with clutch removed](/images/case-studies/torque-driver-disassembled.jpg)
*Cordless torque driver with clutch removed to add sensors and other circuits.*

I was able to install a sensor in the torque driver clutch to detect the rotations of the torque clutch. With the addition of a small circuit made from a prototyping breadboard, I added a counting circuit and an LED lamp. The circuit board was taped to the case of the torque driver with duct tape and the assembly workers were given the prototype to test.

### Test

After a few days of use the operators returned the torque driver and asked if the LED light could be changed to a buzzer to assist them to better hear that the screw was driven home completely. Sometimes, due to the difficult installation location, it was difficult to see the LED.

Swapping out the LED for a piezo buzzer was simple and fast to achieve and supported easier use by the assembly workers. The assembly workers re-tested the torque driver, and all agreed that a buzzer was a significant improvement. They even mentioned that in the noisy assembly environment, they could feel the buzzer vibrations.

In later iterations of the prototype, I added an ethernet radio to the torque driver. I had the circuit board manufactured into a much smaller form to fit inside the torque driver handle. I also added a miniature mobile phone vibrating motor to enhance the successful operation experience with a haptic pulse.

### Deliver

The final product included a small circuit board fitted inside the torque driver, an industrial ethernet radio connecting it to the assembly line Programmable Logic Controller (PLC) and a piezo buzzer helping assembly line workers to have confidence that the airbag computer was installed correctly.

In the integration with PLC and assembly line system, I was able to program the torque driver to know that a vehicle had arrived in the assembly station for the installation of the airbag computer. Count the revolutions the torque driver had screwed and that the torque clutch had activated. This process was repeated six times for each vehicle to indicate the correct number of screws had been installed and the PLC generated a digital certificate authenticating that the airbag computer was correctly installed.

My final prototype was provided to a tool manufacturer who introduced the new technology into their tool product line. And a Wi-Fi enabled smart torque driver was born.

![Final product - an ethernet enabled torque tool](/images/case-studies/final-torque-driver.jpg)
*The final product, an ethernet enabled PLC integrated torque tool, was produced by a tool partner.*
