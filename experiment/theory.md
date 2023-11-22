## Theory

Strain gauges are widely used instruments for measuring mechanical deformation or strain in materials. They are based on the principle that the electrical resistance of a conductor changes when subjected to mechanical strain. Calibration of strain gauges is essential to establish a relationship between the applied load and the resulting resistance change. This calibration process allows for the accurate determination of strain values in practical applications. In this experiment, we will explore the fundamental concepts and procedures for strain gauge calibration.

**1. Principles of Strain Measurement:**

**1.1 Piezoresistive Effect**

The piezoresistive effect forms the basis for strain gauge operation. When a conductor, typically a metal foil or semiconductor, is subjected to mechanical strain, its electrical resistance changes. This change in resistance is proportional to the strain experienced by the material. This property is exploited for accurate measurement of strain. 

**1.2 Wheatstone Bridge Circuit**

Strain gauges are often used in conjunction with Wheatstone bridge circuits (as shown in Figure 1). A Wheatstone bridge is a network of four resistive arms arranged in a diamond shape. The strain gauge is one of these resistive arms. When strain is applied to the gauge, it changes its resistance, causing an imbalance in the bridge circuit. The resulting voltage output, known as the bridge output, is proportional to the change in resistance and, consequently, the strain.

The equation for the output voltage (Vout) of a Wheatstone bridge is as follows:

$$V_{out} = \frac{V_{in}*(\frac{\Delta R}{R})}{S}$$

Where:

Vout is the output voltage.

Vin is the excitation voltage applied to the bridge.

&Delta;R is the change in resistance of the strain gauge.

R is the initial resistance of the strain gauge (unstressed).

S is the sensitivity factor of the strain gauge, which relates the change in resistance to the applied strain. It is typically specified by the manufacturer and is given in units like mV/V.

**2. Calibration Process:**

**2.1 Zeroing the System**

Before calibration, it is crucial to zero the system. This step involves adjusting the bridge circuit to achieve a balanced, zero-voltage output when no strain is applied to the gauge. This ensures that the initial resistance value of the strain gauge is properly balanced.

**2.2 Application of Known Loads**

In the calibration process, known loads are applied to the specimen to which the strain gauge is attached. As the load increases, the strain gauge experiences strain, leading to a change in its resistance. The bridge circuit detects this change and produces a voltage output corresponding to the applied load.



**2.3 Data Collection**

Data is collected by measuring the voltage output from the Wheatstone bridge circuit as a function of the applied load. Multiple data points are typically collected by varying the load in a stepwise fashion. These data points are used to create a calibration curve.

**2.4 Calibration Curve**

The calibration curve is a graphical representation of the relationship between the applied load and the resulting voltage output. Typically, the curve exhibits a linear relationship, allowing for the use of linear regression to find the equation that relates load and voltage output. The slope of this line represents the sensitivity of the strain gauge.

**Sensitivity**

Sensitivity (S) is a critical parameter in strain gauge calibration. It is defined as the change in voltage output per unit load and is usually expressed in units of millivolts per volt (mV/V) per unit load (e.g., N or kg). The sensitivity value determines the strain gauge's ability to convert mechanical strain into an electrical signal.

**Linearity**

The linearity of the calibration curve is essential to ensure that the strain gauge provides accurate measurements over a range of loads. A linear calibration curve indicates that the gauge's sensitivity remains consistent within the tested range of loads.
				

						
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>								