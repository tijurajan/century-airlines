using CenturyAirline.Core.DocumentTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CenturyAirline.Core.Models
{
    public class BookingModel
    {
        public FlightModel flight { get; set; }
        public string lastname { get; set; }

        public string firstname { get; set; }

        public int passengercount { get; set; }
    }
}