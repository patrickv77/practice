/*
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.
*/

/*
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let oldColor = image[sr][sc];
    let dimX = image[0].length;
    let dimY = image.length;
    
    oldColor - newColor && fill(sr, sc);
    
    return image;
    
    function fill (sr, sc) {
        if (image[sr][sc] !== oldColor) {
            return;
        };
        image[sr][sc] = newColor;
        sr && fill(sr - 1, sc);
        (dimY - 1 - sr) && fill(sr + 1, sc);
        sc && fill(sr, sc - 1);
        (dimX - 1 - sc) && fill(sr, sc + 1);
        return;
    };
};

/*
Runtime: 127 ms, faster than 18.88% of JavaScript online submissions for Flood Fill.
Memory Usage: 44.7 MB, less than 26.18% of JavaScript online submissions for Flood Fill.
*/