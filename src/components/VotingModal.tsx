
import { useState } from "react";
import { toast } from "sonner";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Celebrity, VoteFormData } from "@/types";
import { celebrities } from "@/data/celebrities";

interface VotingModalProps {
  isOpen: boolean;
  celebrity: Celebrity | null;
  onClose: () => void;
  onVoteSubmit: (updatedCelebrity: Celebrity) => void;
}

const VotingModal = ({ isOpen, celebrity, onClose, onVoteSubmit }: VotingModalProps) => {
  const [formData, setFormData] = useState<VoteFormData>({
    mobileNumber: "",
    celebrityId: celebrity?.id || 0,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateMobileNumber = (number: string): boolean => {
    // Basic validation for Indian mobile numbers (10 digits)
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(number);
  };

  const handleSubmit = () => {
    if (!validateMobileNumber(formData.mobileNumber)) {
      toast.error("Please enter a valid 10-digit Indian mobile number");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      if (celebrity) {
        // Update vote count
        const updatedCelebrity = {
          ...celebrity,
          votes: celebrity.votes + 1
        };
        
        onVoteSubmit(updatedCelebrity);
        
        // Show success message
        toast.success("Thank you for voting!", {
          description: `Your vote for ${celebrity.name} has been recorded.`,
          duration: 5000,
        });
        
        setIsSubmitting(false);
        onClose();
        setFormData({ mobileNumber: "", celebrityId: 0 });
      }
    }, 1500);
  };

  if (!celebrity) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Vote for {celebrity.name}</DialogTitle>
          <DialogDescription className="text-center">
            Cast your vote to support your favorite personality. One vote per mobile number.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center space-x-4 my-4">
          <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src={celebrity.image} 
              alt={celebrity.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold">{celebrity.name}</h3>
            <p className="text-sm text-muted-foreground">{celebrity.category}</p>
            <div className="text-xs text-india-saffron mt-1">
              Current votes: {celebrity.votes.toLocaleString()}
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="mobileNumber">Your Mobile Number</Label>
            <Input
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Enter 10-digit mobile number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              maxLength={10}
            />
            <p className="text-xs text-muted-foreground">
              We'll send a confirmation message to this number
            </p>
          </div>
        </div>
        
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-india-green hover:bg-india-green/80"
            disabled={isSubmitting || !formData.mobileNumber}
          >
            {isSubmitting ? "Submitting..." : "Confirm Vote"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VotingModal;
