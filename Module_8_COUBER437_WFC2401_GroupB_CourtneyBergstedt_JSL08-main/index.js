class BankBranch {
    constructor(branchInfo) {
        if (!BankBranch.bankBranchInstance) {
            this.branchInfo = branchInfo;
            BankBranch.bankBranchInstance = this;
        }
        return BankBranch.bankBranchInstance;
    }

        // Method to get branch information
        getBranchInfo() {
            return this.branchInfo;
        }
    }

    // Variable to store singleton instance of the bank branch
BankBranch.bankBranchInstance = null;

// Usage
const branchA = new BankBranch("Main Street Branch");
const branchB = new BankBranch("Second Street Branch");

// branch information from branchA
console.log("Branch A Information:", branchA.getBranchInfo());
// branch information from branchB
console.log("Branch B Information:", branchB.getBranchInfo());

// Check if branchA and branchB refer to the same instance
console.log("Are branchA and branchB the same instance?", branchA === branchB); // Output should be true

