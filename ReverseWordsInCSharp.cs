using System;

//TODO: Account for punctuation.
public class Program
{
    string WordsToReverse = "The quick brown fox jumps over the lazy dog.";

    public void Main()
    {
        Console.WriteLine(ReverseWords(WordsToReverse));
    }

    public static string ReverseWords(string str)
    {
        string[] StringAsArray = str.Split(' ');
        Array.Reverse(StringAsArray);
        return string.Join(" ", StringAsArray);
    }

}
