class BankBranch {
    constructor(branchInfo) {
        if (!BankBranch.bankBranchInstance) {
            this.branchInfo = branchInfo;
            BankBranch.bankBranchInstance = this;
        }
        return BankBranch.bankBranchInstance;
    }

