import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Coffee, Utensils, Bed, Car } from "lucide-react"

export function ItineraryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Japan Adventure: Tokyo & Kyoto</h1>
        <p className="text-gray-500 dark:text-gray-400">10 days • April 15-25, 2023</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="day1">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="day1">Day 1</TabsTrigger>
              <TabsTrigger value="day2">Day 2</TabsTrigger>
              <TabsTrigger value="day3">Day 3</TabsTrigger>
              <TabsTrigger value="day4">Day 4</TabsTrigger>
              <TabsTrigger value="day5">Day 5</TabsTrigger>
            </TabsList>

            <TabsContent value="day1" className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-semibold">Tokyo: Arrival & Shinjuku</h2>
              </div>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <CardTitle className="text-base">9:00 AM - 11:00 AM</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-500">Transportation</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-1">Arrive at Narita International Airport</h3>
                  <CardDescription>
                    Clear immigration, collect luggage, and exchange currency if needed.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <CardTitle className="text-base">11:30 AM - 1:00 PM</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-500">Transportation</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-1">Transfer to Hotel in Shinjuku</h3>
                  <CardDescription>
                    Take the Narita Express (N'EX) train to Shinjuku Station (approx. 90 minutes).
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <CardTitle className="text-base">1:00 PM - 3:00 PM</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-500">Accommodation</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-1">Check-in at Hotel Century Southern Tower</h3>
                  <CardDescription>Drop off luggage, freshen up, and rest briefly from the journey.</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <CardTitle className="text-base">3:30 PM - 6:00 PM</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-500">Sightseeing</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-1">Explore Shinjuku Area</h3>
                  <CardDescription>
                    Visit Shinjuku Gyoen National Garden, walk through the bustling streets of Kabukicho, and see the
                    famous Godzilla statue.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <CardTitle className="text-base">6:30 PM - 8:30 PM</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-500">Dining</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-1">Dinner at Omoide Yokocho</h3>
                  <CardDescription>
                    Experience the nostalgic atmosphere of "Memory Lane" with its tiny yakitori and ramen stalls.
                  </CardDescription>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="day2" className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-semibold">Tokyo: Asakusa & Ueno</h2>
              </div>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <CardTitle className="text-base">8:00 AM - 9:00 AM</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-500">Dining</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-1">Breakfast at Hotel</h3>
                  <CardDescription>Enjoy a traditional Japanese breakfast at the hotel restaurant.</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <CardTitle className="text-base">9:30 AM - 12:00 PM</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-500">Sightseeing</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-1">Asakusa & Senso-ji Temple</h3>
                  <CardDescription>
                    Visit Tokyo's oldest temple and walk through the famous Nakamise Shopping Street.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <CardTitle className="text-base">12:30 PM - 1:30 PM</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-500">Dining</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-1">Lunch at Asakusa</h3>
                  <CardDescription>
                    Try local specialties like tempura or monjayaki at a local restaurant.
                  </CardDescription>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="day3">
              <div className="flex items-center justify-center h-40 border rounded-md">
                <p className="text-muted-foreground">Day 3 itinerary content will be displayed here</p>
              </div>
            </TabsContent>

            <TabsContent value="day4">
              <div className="flex items-center justify-center h-40 border rounded-md">
                <p className="text-muted-foreground">Day 4 itinerary content will be displayed here</p>
              </div>
            </TabsContent>

            <TabsContent value="day5">
              <div className="flex items-center justify-center h-40 border rounded-md">
                <p className="text-muted-foreground">Day 5 itinerary content will be displayed here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Trip Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Duration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">10 days (April 15-25, 2023)</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Destinations</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Tokyo (5 days), Kyoto (5 days)</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Accommodations</h3>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• Hotel Century Southern Tower, Tokyo</li>
                  <li>• Kyoto Century Hotel, Kyoto</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-1">Transportation</h3>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <li>• International flights</li>
                  <li>• Shinkansen (bullet train)</li>
                  <li>• Local trains and subway</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weather Forecast</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Tokyo</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">April 15-20</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">18°C - 22°C</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Partly Cloudy</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Kyoto</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">April 20-25</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">16°C - 20°C</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mostly Sunny</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button className="flex-1">Edit Itinerary</Button>
            <Button variant="outline" className="flex-1">
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
