
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
import { ArrowRight, Phone } from "lucide-react";
import { Celebrity, VoteFormData, VoterRecord } from "@/types";

interface VotingModalProps {
  isOpen: boolean;
  celebrity: Celebrity | null;
  onClose: () => void;
  onVoteSubmit: (updatedCelebrity: Celebrity, mobileNumber: string, previousVote: Celebrity | null) => void;
  voterRecords: Record<string, VoterRecord>;
  celebrities: Celebrity[];
}

const VotingModal = ({ 
  isOpen, 
  celebrity, 
  onClose, 
  onVoteSubmit, 
  voterRecords, 
  celebrities 
}: VotingModalProps) => {
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
    
    // Check if this mobile number has voted before
    const voterRecord = voterRecords[formData.mobileNumber];
    let previousVote: Celebrity | null = null;
    
    if (voterRecord && voterRecord.currentVote) {
      previousVote = celebrities.find(c => c.id === voterRecord.currentVote) || null;
    }
    
    // Simulate API call with timeout
    setTimeout(() => {
      if (celebrity) {
        // If previous vote exists and is different from current vote
        if (previousVote && previousVote.id !== celebrity.id) {
          toast.info(`Your vote has been transferred from ${previousVote.name} to ${celebrity.name}`, {
            duration: 5000,
          });
        } else if (!previousVote) {
          // Show success message for first vote
          toast.success("Thank you for voting!", {
            description: `Your vote for ${celebrity.name} has been recorded.`,
            duration: 5000,
          });
        } else {
          // Already voted for this celebrity
          toast.info(`You have already voted for ${celebrity.name}`, {
            duration: 5000,
          });
        }
        
        onVoteSubmit(celebrity, formData.mobileNumber, previousVote);
        
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
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter 10-digit mobile number"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                maxLength={10}
                className="pl-10"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              We'll send a confirmation message to this number
            </p>
          </div>
          
          {/* Show previous vote if exists */}
          {formData.mobileNumber && validateMobileNumber(formData.mobileNumber) && 
           voterRecords[formData.mobileNumber] && 
           voterRecords[formData.mobileNumber].currentVote !== celebrity.id && (
            <div className="p-3 bg-amber-50 border border-amber-100 rounded-md">
              <p className="text-xs text-amber-800 mb-2">
                You previously voted for:
              </p>
              {(() => {
                const previousVoteId = voterRecords[formData.mobileNumber].currentVote;
                const previousCelebrity = celebrities.find(c => c.id === previousVoteId);
                
                if (previousCelebrity) {
                  return (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img 
                          src={previousCelebrity.image} 
                          alt={previousCelebrity.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{previousCelebrity.name}</p>
                        <p className="text-xs text-gray-500">{previousCelebrity.category}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-amber-500" />
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img 
                          src={celebrity.image} 
                          alt={celebrity.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                  );
                }
                return <p className="text-sm">Loading previous vote information...</p>;
              })()}
            </div>
          )}
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
