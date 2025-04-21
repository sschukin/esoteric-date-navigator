
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BirthDetails, cityToCoordinates } from "@/utils/dateUtils";

interface BirthDetailsFormProps {
  onSubmit: (details: BirthDetails) => void;
}

const BirthDetailsForm = ({ onSubmit }: BirthDetailsFormProps) => {
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthCity, setBirthCity] = useState("");
  const [userGoal, setUserGoal] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!birthDate) newErrors.birthDate = "Birth date is required";
    if (!birthTime) newErrors.birthTime = "Birth time is required";
    if (!birthCity) newErrors.birthCity = "Birth city is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Parse date
    const [day, month, year] = birthDate.split('.');
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    
    // Get coordinates
    const coordinates = cityToCoordinates(birthCity);
    
    onSubmit({
      birthDate: date,
      birthTime,
      birthCity,
      userGoal,
      latLong: coordinates
    });
  };

  return (
    <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-primary/20">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Esoteric Birth Chart</CardTitle>
        <CardDescription className="text-center">
          Enter your birth details for multidisciplinary analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="birthDate">Birth Date (DD.MM.YYYY)</Label>
            <Input
              id="birthDate"
              placeholder="21.03.1988"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="bg-background/50"
            />
            {errors.birthDate && <p className="text-xs text-destructive">{errors.birthDate}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="birthTime">Birth Time (HH:MM)</Label>
            <Input
              id="birthTime"
              placeholder="14:30"
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
              className="bg-background/50"
            />
            {errors.birthTime && <p className="text-xs text-destructive">{errors.birthTime}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="birthCity">Birth City</Label>
            <Input
              id="birthCity"
              placeholder="Moscow"
              value={birthCity}
              onChange={(e) => setBirthCity(e.target.value)}
              className="bg-background/50"
            />
            {errors.birthCity && <p className="text-xs text-destructive">{errors.birthCity}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="userGoal">Your Goal (optional)</Label>
            <Textarea
              id="userGoal"
              placeholder="What insight are you seeking?"
              value={userGoal}
              onChange={(e) => setUserGoal(e.target.value)}
              className="bg-background/50 min-h-[80px]"
            />
          </div>
          
          <Button type="submit" className="w-full bg-primary text-primary-foreground">
            Analyze Birth Chart
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BirthDetailsForm;
