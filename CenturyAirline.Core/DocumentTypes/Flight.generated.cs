//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder v3.0.10.102
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.ModelsBuilder;
using Umbraco.ModelsBuilder.Umbraco;

namespace CenturyAirline.Core.DocumentTypes
{
	/// <summary>Flight</summary>
	[PublishedContentModel("flight")]
	public partial class Flight : Flights
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "flight";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public Flight(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<Flight, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Arrival City
		///</summary>
		[ImplementPropertyType("arrivalCity")]
		public string ArrivalCity
		{
			get { return this.GetPropertyValue<string>("arrivalCity"); }
		}

		///<summary>
		/// Departure City
		///</summary>
		[ImplementPropertyType("departureCity")]
		public string DepartureCity
		{
			get { return this.GetPropertyValue<string>("departureCity"); }
		}

		///<summary>
		/// End Time
		///</summary>
		[ImplementPropertyType("endTime")]
		public DateTime EndTime
		{
			get { return this.GetPropertyValue<DateTime>("endTime"); }
		}

		///<summary>
		/// Flight Number
		///</summary>
		[ImplementPropertyType("flightNumber")]
		public string FlightNumber
		{
			get { return this.GetPropertyValue<string>("flightNumber"); }
		}

		///<summary>
		/// Notes
		///</summary>
		[ImplementPropertyType("notes")]
		public string Notes
		{
			get { return this.GetPropertyValue<string>("notes"); }
		}

		///<summary>
		/// Passenger Capacity
		///</summary>
		[ImplementPropertyType("passengerCapacity")]
		public string PassengerCapacity
		{
			get { return this.GetPropertyValue<string>("passengerCapacity"); }
		}

		///<summary>
		/// Start Time
		///</summary>
		[ImplementPropertyType("startTime")]
		public DateTime StartTime
		{
			get { return this.GetPropertyValue<DateTime>("startTime"); }
		}
	}
}
