#include<iostream>
using namespace std;
int main ()
{
    int year, month, day;
    cin >> year >> month;
    
    switch(month)
    {
        case 1:case 3:case 5:case 7:case 8:case 10:case 12:
            day = 31;
            break;
        case 2:
        {
            if (year % 4 == 0 && year % 400 != 0)
                day = 
        }
    }
}