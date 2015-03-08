"use strict";

/*
 Problem 5:

 Background:
 India is a nation of many languages. Hindi is spoken, or at least understood, in many regions. English is spoken in
 many cities as well. In Bangalore, Kannada is the local language. Urdu is another language spoken in some parts of
 India. What is interesting about Urdu is that, unlike most languages, it is written right to left.
 http://en.wikipedia.org/wiki/Urdu#Urdu_script

 Problem statement:
 A company released a newspaper advertisement containing text in Hindi, Urdu, and English. However it made a mistake in
 writing the Urdu words left to right instead of right to left. Write a program to correct the mistake and restructure
 the input into one line, and also to count the total words in the advertisement. Note that the words are provided in
 the form of a nested array. The Urdu words are in the second array.

 Example:
 [
     ["zara", "dhyaan", "dein"],
     ["mazarat", "chahenge"], // reverse this line
     ["attention", "please"]
 ]


 Given an advertising text:
     zara dhyaan dein
     mazarat chahenge
     attention please
 When I correct the text
 Then the result should be:
     zara dhyaan dein chahenge mazarat attention please
     count: 7
 */

function editAdvertisement(advertisingText) {

    var advertisingText1 = advertisingText[0].join(" ");
    var advertisingText2 = advertisingText[1].join(" ");
    var advertisingText3 = advertisingText[2].join(" ");

    changeElementText("#advertisingText1", advertisingText1);
    changeElementText("#advertisingText2", advertisingText2);
    changeElementText("#advertisingText3", advertisingText3);

    var newAdvertisingText2 = advertisingText[1].reverse().join(" ");

    var count = 0;
    for (var line = 0; line < advertisingText.length; line++) {
        for (var word = 0; word < advertisingText[line].length; word++) {
            count++;
        }
    }
    changeElementText("#newAdvertisingText1", advertisingText1);
    changeElementText("#newAdvertisingText2", newAdvertisingText2);
    changeElementText("#newAdvertisingText3", advertisingText3);
    changeElementText("#count", count);
}