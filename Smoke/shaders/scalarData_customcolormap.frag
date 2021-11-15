#version 330 core
// Colormap fragment shader

in float value;

uniform vec3 colorMapColors[3];

out vec4 color;

void main()
{


    vec3 colorFromColorMap;
    if (value < 0.3333){
        colorFromColorMap = colorMapColors[0];
    }else if (value > 0.3333 && value < 0.666){
        colorFromColorMap = colorMapColors[1];
    }else {
        colorFromColorMap = colorMapColors[2];
    }

    // As a place holder, always choose the color with index 0.
    //vec3 colorFromColorMap = colorMapColors[0] * value; // Remove this placeholder value

    color = vec4(colorFromColorMap, 1.0F);

}
