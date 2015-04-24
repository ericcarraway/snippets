using System;
using System.Collections.Generic;
using System.Linq;

public class Program
{

    List<int> LostNumbers = new List<int>() { 4, 8, 15, 16, 23, 42 };

    public void Main()
    {
        OutputHighestThree();
    }

    public void OutputHighestThree()
    {
        List<int> HighestThreeNumbers = LostNumbers.OrderByDescending(g => g).ToList();
        for (var i = 0; i < 3; i++)
        {
            Console.WriteLine(HighestThreeNumbers[i]);
        }
    }

}
