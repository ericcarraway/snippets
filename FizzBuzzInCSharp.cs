using System;

public class Program
{
    public void Main()
    {
        FizzBuzz();
    }

    public void FizzBuzz()
    {
        for (var i = 1; i <= 100; i++)
        {
            if ((i % 3 == 0) && (i % 5 == 0))
            {
                Console.WriteLine("FizzBuzz");
            }
            else
            {
                if (i % 3 == 0) Console.WriteLine("Fizz");
                else if (i % 5 == 0) Console.WriteLine("Buzz");
            }
        }
    }

}