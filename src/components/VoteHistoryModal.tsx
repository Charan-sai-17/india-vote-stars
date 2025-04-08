
import { useState } from "react";
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
import { Phone, Search } from "lucide-react";
import { Celebrity } from "@/types";
import { toast } from "sonner";

interface VoteHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  celebrities: Celebrity[];
  voterRecords: Record<string, VoterRecord>;
}

interface VoterRecord {
  currentVote: number;
  history: {
    celebrityId: number;
    timestamp: Date;
  }[];
}

const VoteHistoryModal = ({ isOpen, onClose, celebrities, voterRecords }: VoteHistoryModalProps) => {
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [searchResults, setSearchResults] = useState<{
    voterRecord: VoterRecord;
    currentCelebrity: Celebrity | null;
    history: {
      celebrity: Celebrity | null;
      timestamp: Date;
    }[];
  } | null>(null);
  
  const validateMobileNumber = (number: string): boolean => {
    // Basic validation for Indian mobile numbers (10 digits)
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(number);
  };
  
  const handleSearch = () => {
    if (!validateMobileNumber(mobileNumber)) {
      toast.error("Please enter a valid 10-digit Indian mobile number");
      return;
    }
    
    const record = voterRecords[mobileNumber];
    
    if (!record) {
      toast.info("No voting history found for this mobile number");
      setSearchResults(null);
      return;
    }
    
    // Find the current celebrity this number has voted for
    const currentCelebrity = celebrities.find(c => c.id === record.currentVote) || null;
    
    // Map history to include celebrity details
    const history = record.history.map(h => ({
      celebrity: celebrities.find(c => c.id === h.celebrityId) || null,
      timestamp: h.timestamp
    }));
    
    setSearchResults({
      voterRecord: record,
      currentCelebrity,
      history
    });
  };
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Check Your Voting History</DialogTitle>
          <DialogDescription className="text-center">
            Enter your mobile number to see your voting history.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="historyMobileNumber">Your Mobile Number</Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="historyMobileNumber"
                  placeholder="Enter 10-digit mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  maxLength={10}
                  className="pl-10"
                />
              </div>
              <Button 
                onClick={handleSearch} 
                type="button"
                size="icon"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {searchResults && (
            <div className="mt-4 border rounded-md p-4 space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Current Vote</h4>
                {searchResults.currentCelebrity ? (
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={searchResults.currentCelebrity.image} 
                        alt={searchResults.currentCelebrity.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{searchResults.currentCelebrity.name}</p>
                      <p className="text-sm text-gray-500">{searchResults.currentCelebrity.category}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No current vote</p>
                )}
              </div>
              
              {searchResults.history.length > 1 && (
                <div className="space-y-2">
                  <h4 className="font-medium">Voting History</h4>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {searchResults.history.slice(0, -1).reverse().map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm border-b pb-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                          {item.celebrity && (
                            <img 
                              src={item.celebrity.image} 
                              alt={item.celebrity.name}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div className="flex-1">
                          {item.celebrity ? (
                            <>
                              <p className="font-medium">{item.celebrity.name}</p>
                              <p className="text-xs text-gray-500">{item.celebrity.category}</p>
                            </>
                          ) : (
                            <p className="text-gray-500">Unknown celebrity</p>
                          )}
                        </div>
                        <div className="text-xs text-gray-500">
                          {formatDate(item.timestamp)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VoteHistoryModal;
