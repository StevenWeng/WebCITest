using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NUnit.Framework;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

/// <summary>
/// Summary description for JsonConvertTest
/// </summary>
[TestFixture]
public class JsonConvertTest
{
    [Test]
    public void testJObject() {
        JObject jo = new JObject();
        jo["msg"] = "Hello";
        String joStr = jo.ToString();

        JObject cloneJo = JsonConvert.DeserializeObject<JObject>(joStr);

        Assert.AreEqual(jo, cloneJo);
    }
}