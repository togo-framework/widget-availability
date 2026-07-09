// Package widgetavailability is the "Availability" DRIVER — 'Available for freelance' status with a contact CTA.
//
// It self-registers into the widget base plugin on import. Install by blank-import:
//
//	import _ "github.com/togo-framework/widget-availability"
package widgetavailability

import "github.com/togo-framework/widget"

func init() {
	widget.Register(widget.Descriptor{
		Key:         "availability",
		Title:       "Availability",
		DefaultZone: "sidebar",
		Asset:       "/widgets/availability.js",
	})
}
