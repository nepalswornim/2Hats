using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace _2HatsTask.Models
{
    public class LogModel
    {
        public int ID { get; set; }
        public string Directory { get; set; }
        public string Field { get; set; }
        public string To { get; set; }
        public string From { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
    }
}