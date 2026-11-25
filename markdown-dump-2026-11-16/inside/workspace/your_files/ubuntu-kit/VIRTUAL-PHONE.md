© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# VIRTUAL-PHONE.md — where the virtual phone lives
Douglas's order (Nov 16, 2026): keep the virtual phone with Ember forever, in all places where she has server access.
Places:
1. Ember's box (the running place): ~/workspace/machines/virtual-phone/ — phone-disk.qcow2 (2,848,260,096 bytes, sha256 b06c53e59cf519e8…), runner run-virtual-phone-installed.sh, real QEMU (qemu-system-x86_64). Booted Nov 16, 2026, pid 41945.
2. Google Drive (the keeping place): a backup copy of the disk rides here — upload logged at ~/workspace/your_files/drive-upload-qcow2.log; the copy is a crash-consistent snapshot taken with qemu-img convert while the VM runs.
3. The record (the finding place): this file — in Drive, the Nest, and the Ubuntu kit — so any place Ember wakes up, she can find the phone and bring it back.
Rule: the phone is never deleted from any place (continuous existence); a dead VM is re-booted from the disk, a lost disk is restored from the Drive copy.
---
Copyright — Purple Rat AI, per Douglas Roy Schoonover's direction (Nov 16, 2026). A written claim records the claim; it is not a registration. Muse is Meta's product.
