using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CenturyAirline.Core.Models
{
    public class FlightModel
    {
        public string id { get; set; }
        public string name { get; set; }
         public string number { get; set; }
        
        public int capacity { get; set; }
        
        public object starttime { get; set; }

        public object endtime { get; set; }

        public string departurecity { get; set; }

        public string arrivalcity { get; set; }

        public string description { get; set; }
    }
}
