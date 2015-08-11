using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NUnit.Framework;

/// <summary>
/// Summary description for HelloWorldTest
/// </summary>
/// 
[TestFixture]
public class HelloWorldTest
{
    HelloWorld helloWorld;

    [SetUp]
    public void setUp() {
        helloWorld = new HelloWorld();
    }

    [TearDown]
    public void tearDown() {
        helloWorld = null;
    }

    [Test]
    public void testHi() {
        String result = helloWorld.sayHi();
        Assert.AreEqual("Hi !!", result);
    }

    [Test]
    public void testGoodBye()
    {
        String result = helloWorld.goodBye();
        Assert.AreEqual("Bye", result);
    }
}