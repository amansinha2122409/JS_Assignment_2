/*
Q1.Find Grades
Your school has the following grading system based upon the marks (M) obtained by a student:
 If M≤10, the grade will be E.
 If 11≥M≤20, the grade will be D.
 If 21≥M≤30, the grade will be C.
 If 31≥M≤40, the grade will be B.
 If 41≥M≤50, the grade will be A.
Your friend will enter his marks out of 5050, and your task is to print his grades using a switch statement.
Note: You have to complete findGrades function. No need to take any input.
Input Format
The first and the only line of the input contain an integer M, representing the marks that your friend will enter in the grading system.
Output Format
Return the grade obtained by your friend.
Constraints
0≤M≤50
*/
let m=30
var grade='A'
switch (true) 
{
    case (m <= 10):
        grade = 'E';
        break;
    case (m <= 20):
        grade = 'D';
        break;
    case (m <= 30):
        grade = 'C';
        break;
    case (m <= 40):
        grade = 'B';
        break;
    case (m >=41 && m <= 50):
        grade = 'A';
        break;
    default:
        grade = 'Invalid marks';
}
console.log(grade);

/*
Q2. Get Value
You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the
table corresponding to an input character and return it.
| P or p - PrepBytes |
| Z or z - Zenith |
| E or e - Expert Coder |
| D or d - Data Structure |
Note: You have to complete getValue function. No need to take any input.
Input Format
The first and the only line of the input contain a character C, representing the character that you will get in input.
Output Format
Return the value corresponding to the input character.
Constraints
C will be one of the following characters: [P, p, Z, z, E, e, D, d].
Example
Sample Input
E
Sample Output
Expert Coder
*/
let c='P'
var grade='A'
switch (true) 
{
    case (c=='p' || c=='P'):
        console.log("PrepBytes")
        break;
    case (c=='z' || c=='Z'):
        console.log("Zenith")
        break;
    case (c=='E' || c=='E'):
        console.log("Expert Coder")
        break;
    case (c=='d' || c=='D'):
        console.log("Data Structure")
        break;
}

/*
Q3. Find the maximum out of three numbers.
Take three numbers and print the largest number among them if all of three are same print −1−1.
Note: You have to complete Max_out_of_three. No need to take any input.
Input Format
The input contains three numbers A, B and C.
Output Format
Return the maximum number out of the three numbers as result.
Constraints
1≤A, B, C≤10000
Example
Sample Input
2 5 4
Sample Output
5
*/
let a1=2
let a2=5
let a3=4
let max
if(a1>a2)
{
    if(a1>a3)
        max=a1
}
else if(a2>a1)
{
    if(a2>a3)
        max=a2
}
else
    max=a3
console.log("max number is"+max)

/*
Q4. Second Smallest
You are given 33 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided
integers.
Note: You have to complete findSndSmallest function. No need to take any input.
Input Format
The first and the only line of the input contains three space-separated integers X, Y, and Z, denoting the integers among which you
have to find the second smallest element.
Output Format
Return the second smallest integer among the three integers given to you.
Constraints
1≤X, Y, Z≤500
X! =Y! =, Y!=Z!=, X!=Z
Example
Sample Input
2 9 23
Sample Output
9
*/
let X=2
let Y=5
let Z=4
let secmax
if ((X > Y && X < Z) || (X < Y && X > Z)) 
{
    secmax=X
} 
else if ((Y > X && Y < Z) || (Y < X && Y > Z)) 
{
    secmax=Y
} 
else 
{
    secmax=Z;
}
console.log("The second max number is"+ secmax)

/*
Q5. Check whether the triangle is Acute or Obtuse
Write a program takes takes three angles and checks whether the triangle is acute or obtuse.
Note: You have to complete Triangle_Check. No need to take any input
Input Format
The input contains three numbers A, B and C which denotes the angles of a triangle.
Output Format
Return the required result.
Constraints
0≤A, B, C≤180
Example
Sample Input
60 100 20
Sample Output
obtuse
*/
let A1=60
let A2=100
let A3=20

if((A1 || A2 || A3) >90)
{
    console.log("Obtuse triangle");
}
else if((A1 || A2 || A3) ==90)
{
    console.log("Right Angle triangle")
}
else
{
    console.log("Acute triangle")
}
